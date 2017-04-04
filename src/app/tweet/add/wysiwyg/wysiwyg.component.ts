import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../shared/model/user";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.css']
})
export class WysiwygComponent implements OnInit {
  private TWITTER_DEFAULT_ICON = 'assets/images/twitter.png';
  private suggestionBoxText = "";
  private lastCaretPosition = 0;
  private firstClick = true;

  @ViewChild('editor') editor;
  @ViewChild('textMeasure') textMeasure;

  suggestedUsers : User[];
  suggestionBoxTop = 0;
  suggestionBoxLeft = 0;
  suggestionShow = false;

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  buildText() : string {
    return this.editor.nativeElement.innerHTML;
  }

  focusEditor() {
    if(this.firstClick) {
      this.firstClick = false;
      this.editor.nativeElement.innerHTML = "";
    }
  }

  insertLink(title: string, href : string) {
    this.setCaretPos(this.editor.nativeElement, this.lastCaretPosition);
    document.execCommand("insertHTML", false, "<a name='link' href='" + href +"'>" + title + "</a>");
  }

  autoSuggestKeyPress(key) {
    if(key == 64) { //@
      let position = this.getAbsoluteCaretPosition(this.editor.nativeElement, this.textMeasure.nativeElement);
      this.showSuggestionBox(position);
    } else if(key == 32) {//space
      this.hideSuggestionBox();
    }
  }

  selectSuggestedUser(username : string) {
    let regexp = new RegExp("@" + this.suggestionBoxText, "gi");
    this.editor.nativeElement.innerHTML = this.editor.nativeElement.innerHTML.replace(regexp, "<a name='user' href='#'>@" + username + "</a>");
    this.hideSuggestionBox();
  }

  clearEditor() {
    this.editor.nativeElement.innerHTML = "";
    this.hideSuggestionBox();
  }

  private autoSuggestKeyDown(key) {
    if(this.suggestionShow) {
      if(key == 8) {
        this.handleSuggestionKey("");
      } else if(String.fromCharCode(key).match(/(\w|\s)/g)) {
        this.handleSuggestionKey(String.fromCharCode(key));
      }
    }
  }

  lostFocus() {
    this.lastCaretPosition = this.getCaretPos(this.editor.nativeElement);
  }

  private showSuggestionBox(position: { x:number; y:number; }) {
    this.suggestionShow = true;
    this.suggestionBoxLeft = position.x;
    this.suggestionBoxTop = position.y;
  }

  private hideSuggestionBox() {
    this.suggestionShow = false;
    this.suggestionBoxText = "";
  }

  private handleSuggestionKey(letter : string) {
    if(letter.length == 0) {
      if(this.suggestionBoxText.length == 0) {
        this.hideSuggestionBox();
      } else {
        this.suggestionBoxText = this.suggestionBoxText.substring(0, this.suggestionBoxText.length - 1);
      }
    } else {
      this.suggestionBoxText += letter;
    }
    this.suggestedUsers = this.userService.getSuggestedUsers(this.suggestionBoxText, 5);
  }

  private getAbsoluteCaretPosition(element, hiddenElement) : { x:number; y:number; } {
    hiddenElement.innerHTML = element.innerHTML;
    let hiddenHeight = 0;
    if(hiddenElement.offsetHeight == 0) hiddenHeight = 28;
    else hiddenHeight = hiddenElement.offsetHeight;

    return {
      x: hiddenElement.offsetWidth + element.offsetLeft + 20,
      y: hiddenHeight + element.offsetTop + 14
    };
  }

  private setCaretPos(element, caret : number) {
    element.focus();
    const range = document.createRange();
    for(let i = 0; i < element.childNodes.length && caret >= 0; i++) {
      let child = element.childNodes[i];
      let textLength = 0;
      if(child instanceof Text) {
        textLength = child.wholeText.length;
      } else if(child instanceof HTMLAnchorElement) {
        textLength = child.text.length;
      }
      if(textLength >= caret) {
        range.setStart(child, caret);
        range.setEnd(child, caret);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        caret -= textLength;
      }
    }
  }

  private getCaretPos(element) : number {
    let caretOffset = 0;
    const doc = element.ownerDocument || element.document;
    const win = doc.defaultView || doc.parentWindow;
    let sel;
    if (typeof win.getSelection != "undefined") {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
        const range = win.getSelection().getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
      }
    } else if ( (sel = doc.selection) && sel.type != "Control") {
      const textRange = sel.createRange();
      const preCaretTextRange = doc.body.createTextRange();
      preCaretTextRange.moveToElementText(element);
      preCaretTextRange.setEndPoint("EndToEnd", textRange);
      caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
  }

}
