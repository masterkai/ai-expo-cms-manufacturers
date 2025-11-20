import { Component, inject } from '@angular/core';
import { MatDialogModule,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
    selector: 'app-note',
    imports: [MatDialogModule, MatButtonModule, FormsModule],
    templateUrl: './note.html',
    styleUrl: './note.scss'
})

export class Note {

    private data = inject<{news_key: number, notes: string}>(MAT_DIALOG_DATA);
    private articleService = inject(ArticleService);
    private dialogRef = inject(MatDialogRef<Note>);

    protected noteContent: string = this.data.notes;

    save() {
        this.articleService.saveNote(this.data.news_key, this.noteContent).subscribe({
            next: () => {
                this.dialogRef.close({result: true, content: this.noteContent});
            },
            error: (error) => {
                console.error('Error saving note:', error);
            }
        });
    }
}
