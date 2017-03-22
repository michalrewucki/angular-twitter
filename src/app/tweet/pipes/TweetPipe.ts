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
    let splitText = value.split(" ");
    let returnedHtml = "";

    for (let i = 0; i < splitText.length; i++) {
      let word = splitText[i];

      if (word.startsWith("@")) {
        splitText[i] = TweetPipe.buildPersonLink(word);
      } else if (word.startsWith("http://") || word.startsWith("https://")) {
        splitText[i] = TweetPipe.buildLongLink(word);
      } else if (word.startsWith("link:")) {
        splitText[i] = TweetPipe.buildShortLink(word);
      }

      returnedHtml += splitText[i] + " ";
    }
    return returnedHtml;
  }

  private static buildPersonLink(word: string) : string {
    return "<a href='#'>" + word + "</a>";
  }

  private static buildLongLink(word: string) : string {
    return  "<a href=" + word + ">" + word + "</a>";
  }

  private static buildShortLink(word: string) : string {
    return  "<a href=" + word + ">" + word + "</a>";
  }
}
