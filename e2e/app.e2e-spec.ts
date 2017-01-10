import { Ng2EmojifyExamplePage } from './app.po';

describe('ng2-emojify-example App', function() {
  let page: Ng2EmojifyExamplePage;

  beforeEach(() => {
    page = new Ng2EmojifyExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
