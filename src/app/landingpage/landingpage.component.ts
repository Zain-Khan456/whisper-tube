import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  appdetailimg: string = 'Generate Captions';

  carddata = [
    {
      img: '/assets/carditem1.svg',
      name: 'hidden knowledge',
      discription:
        "Don't just translate or transcript but discover hidden knowledge in videos.",
    },
    {
      img: '/assets/carditem2.svg',
      name: 'Convert Media',
      discription: 'Convert media to any known format or resolution.',
    },
    {
      img: '/assets/carditem3.svg',
      name: 'segment video',
      discription:
        'Segment videos and filter content by each User in the video.',
    },
    {
      img: '/assets/carditem4.svg',
      name: 'Translate',
      discription: 'Translate Videos from any language to any language.',
    },
    {
      img: '/assets/carditem5.svg',
      name: 'Burn Footage',
      discription: 'Burn Translated subtitles into the original video.',
    },
    {
      img: '/assets/carditem6.svg',
      name: 'Dub Audio',
      discription:
        'Dub the Audio in a translated language using voice cloning.',
    },
    {
      img: '/assets/carditem7.svg',
      name: 'video to audio',
      discription: 'Video to Audio Book Generation based on selected criteria.',
    },
    {
      img: '/assets/carditem8.svg',
      name: 'visualize knowledge',
      discription:
        'Visualize hidden knowledge using Mind maps, Knowledge graphs, Word clouds.',
    },
  ];

  vercards = [
    {
      icon: '/assets/cardicon1.svg',
      operation: 'Generate Captions',
      img: '/assets/app-details-imgs/Generate Captions.png',
    },
    {
      icon: '/assets/cardicon2.svg',
      operation: 'Translate Subtitle',
      img: '/assets/app-details-imgs/Translate Subtitle.png',
    },
    {
      icon: '/assets/cardicon3.svg',
      operation: 'Video Dubbing',
      img: '/assets/app-details-imgs/Video Dubbing.png',
    },
    {
      icon: '/assets/cardicon4.svg',
      operation: 'AI Voice-Over',
      img: '/assets/app-details-imgs/AI Voice-Over.png',
    },
    {
      icon: '/assets/cardicon5.svg',
      operation: 'Record Voice',
      img: '/assets/app-details-imgs/Record Voice.png',
    },
    {
      icon: '/assets/cardicon6.svg',
      operation: 'Transcript',
      img: '/assets/app-details-imgs/Transcript.png',
    },
    {
      icon: '/assets/cardicon7.svg',
      operation: 'SRT,VVT,MP4',
      img: '/assets/app-details-imgs/SRT,VVT,MP4.png',
    },
  ];
  carddetail: any = this.vercards[0];
  showImage(name: any) {
    this.appdetailimg = name;
    const singledata = this.vercards.filter(
      (card) => card.operation === this.appdetailimg
    );
    this.carddetail = singledata[0];
  }

  scrollcards = [
    { title: 'Michel John', subtitle: 'Animator' },
    { title: 'Joshy', subtitle: 'Artist' },
    { title: 'Annette Black', subtitle: 'Chairman' },
    { title: 'Nancy Lynch', subtitle: 'Video Editor' },
    { title: 'Annette Black', subtitle: 'CEO' },
    { title: '1', subtitle: 'CEO' },
    { title: '2', subtitle: 'CEO' },
  ];
}
