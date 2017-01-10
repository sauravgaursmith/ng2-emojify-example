import {Component} from '@angular/core';
import {CustomEmotion, Emotion} from "ng2-emojify";
import { emotionCss} from './custom-emoji-menu-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng2-emojify-example application';
  message: string = 'Hi ... I\'m so happy today ! :cat:';
  customEmotionCss: any;

  constructor(private customEmotion: CustomEmotion, private emotion: Emotion) {

    this.customEmotionCss = emotionCss;

    /* Mandatory to keep in constructor */

    /* ***************************************************************************
     *  @ CustomEmotion
     * `emojiId` - This is the id which will be used to convert into emoji.
     * `emojiUrl` - This is the path to that image/gif which is to be used as emoji.
     * `title` - This is the `title` to be shown as `tooltip`.
     * *************************************************************************** */

    this.customEmotion.AddCustomEmotions([
      {
        emojiId: 'cat',
        emojiUrl: 'assets/myemoji/cat.jpg',
        title: 'My Cat'
      },
      {
        emojiId: 'thumpsup',
        emojiUrl: 'https://s-media-cache-ak0.pinimg.com/originals/1d/bf/27/1dbf278f081f91ed4d44108a21bd0135.gif',
        title: 'Thumps Up'
      }
    ]);

    /* ********************************************************************************
     *  @ Emotion
     * `emojiIdentity` - This is the simple string like `:happy:` or `:smile:` of the
     emoji that has been clicked in the emoji menu.
     * *************************************************************************** */

    this.emotion.CaptureEmojiClick().subscribe((emojiIdentity: string) => {
      this.SetMessage(emojiIdentity);
    });


  }


  SetMessage(message: string): void {
    console.log(message);
    this.message = message;
  }
}
