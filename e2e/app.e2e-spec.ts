import { ShadowdomPage } from './app.po';

describe('shadowdom App', () => {
  let page: ShadowdomPage;

  beforeEach(() => {
    page = new ShadowdomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
