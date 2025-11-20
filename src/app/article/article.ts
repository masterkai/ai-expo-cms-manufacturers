import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, input, inject, signal} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { ActivatedRoute, RouterLink,Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Note } from './note/note';
import { ArticleService } from './article.service';
import { ArticleInerface, ArticleNavigation } from './article.interface';
import { SkeletonModule } from 'primeng/skeleton';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-article',
    imports: [RouterLink, MatButtonModule,MatMenuModule,MatDialogModule,SkeletonModule],
    templateUrl: './article.html',
    styleUrl: './article.scss',
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class Article {

    protected id = input<number>();

    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private dialog = inject(MatDialog);
    private articleService = inject(ArticleService);
    private _snackBar = inject(MatSnackBar);

    @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

    protected data = signal<ArticleInerface|undefined>(undefined);
    protected prevData = signal<ArticleNavigation|undefined>(undefined);
    protected nextData = signal<ArticleNavigation|undefined>(undefined);

    protected fontSize = signal<number>(Number(localStorage.getItem('fontSize')) || 20); // 預設字體大小

    ngOnInit() {
        this.route.params.subscribe(
            data=>{
                this.data.set(undefined);
                this.prevData.set(undefined);
                this.nextData.set(undefined);
                this.getArticle(data["id"]);
            }
        );
    }

    getArticle(id: number){
        this.articleService.getArticle(id).subscribe({
            next: (response) => {
                this.data.set(response.data.current_article);
                this.prevData.set(response.data.previous_article);
                this.nextData.set(response.data.next_article);

                setTimeout(() => {
                    this.swiper.nativeElement.initialize();
                }, 0);
            },
            error: (error) => {
                console.error('Error fetching article:', error);
            }
        });
    }

    coverPrev(){
        this.swiper.nativeElement.swiper.slidePrev();
    }

    coverNext(){
        this.swiper.nativeElement.swiper.slideNext();
    }

    setFontSize(value: number) {
        this.fontSize.set(value);
        localStorage.setItem('fontSize',value.toString());
    }

    openNote(){
        const dialogRef = this.dialog.open(Note, {
            panelClass:'my-dialog',
            width:'600px',
            maxWidth:'90vw',
            autoFocus: false,
            data:{ 
                news_key: this.id()!,
                notes: this.data()!.notes
            }
        });

        dialogRef.afterClosed().subscribe((result: {result: boolean; content: string}) => {
            if(result.result) {
                this.data.set({ ...this.data()!, notes: result.content });
                this._snackBar.open('筆記已儲存','',{
                    duration: 2000,
                    panelClass:'success'
                });
            }
        });
    }

    like(){
        if(this.data()!.is_favorite)
        {
            //取消收藏
            this.data()!.is_favorite = false;
            this.articleService.unlike(this.id()!).subscribe({
                error: (error) => {
                    this.data()!.is_favorite = true;
                    console.error('Error unliking article:', error);
                }
            });

        }
        else
        {
            this.data()!.is_favorite = true;
            this.articleService.like(this.id()!).subscribe({
                error: (error) => {
                    this.data()!.is_favorite = false;
                    console.error('Error liking article:', error);
                }
            });
        }
    }

    goBack(){
        this.router.navigateByUrl('/');
        //window.history.back();
    }

}
