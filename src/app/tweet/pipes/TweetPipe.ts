import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
@Pipe({name: 'tweet'})
export class TweetPipe implements PipeTransform {
  transform(value: string): string {
    // let splitText = value.split(" ");
    // let returnedHtml = "";
    //
    // for (let i = 0; i < splitText.length; i++) {
    //   let word = splitText[i];
    //
    //   if (word.startsWith("<[link]:")) {
    //     splitText[i] = TweetPipe.buildShortLink(word);
    //   } else if (word.startsWith("http://") || word.startsWith("https://")) {
    //     splitText[i] = TweetPipe.buildLongLink(word);
    //   } else if (word.startsWith("@")) {
    //     splitText[i] = TweetPipe.buildPersonLink(word);
    //   }
    //
    //   returnedHtml += splitText[i] + " ";
    // }
    return value;
  }

  private static buildPersonLink(word: string) : string {
    return "<a href='#'>" + word + "</a>";
  }

  private static buildLongLink(word: string) : string {
    return  "<a href=" + word + ">" + word + "</a>";
  }

  private static buildShortLink(word: string) : string {
    let nameStart = word.indexOf("[link]") + 5;
    let nameEnd = word.indexOf("[/link]") - 1;

    let hrefStart = word.indexOf("[href]") + 5;
    let hrefEnd = word.indexOf("[/href]") - 1;

    return  "<a href=" + word.substring(nameStart, nameEnd) + ">" + word.substring(hrefStart, hrefEnd) + "</a>";
  }
}
