import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profile-template1';
  displayedColumns: string[] = ['name', 'email', 'role','image','cover_image','album_cover'];
  dataSource = new MatTableDataSource<any>([
    { name: 'Abel Tesfaye', email: 'Theweeknd@gmail.com', role: 'Musician',
    image:'https://wallpapers.com/images/featured/the-weeknd-after-hours-3cedl88oh962sybq.jpg',
    cover_image:'https://wallpapercosmos.com/w/full/a/c/b/193470-1920x1080-desktop-full-hd-the-weeknd-wallpaper-image.jpg',
     album_cover:'https://preview.redd.it/mj2fydrqzbo41.jpg?auto=webp&s=671e35fbc7832de289f14c7bedb52b06757463ba'
}]);
}
