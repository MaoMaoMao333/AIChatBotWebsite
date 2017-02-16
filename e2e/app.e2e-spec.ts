import { AITranslationWebsitePage } from './app.po';

describe('aitranslation-website App', function() {
  let page: AITranslationWebsitePage;

  beforeEach(() => {
    page = new AITranslationWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
