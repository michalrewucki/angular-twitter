import { Angularjs2TwitterPage } from './app.po';

describe('angularjs2-twitter App', () => {
  let page: Angularjs2TwitterPage;

  beforeEach(() => {
    page = new Angularjs2TwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
