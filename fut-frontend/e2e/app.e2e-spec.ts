import { FutFrontendPage } from './app.po';

describe('fut-frontend App', function() {
  let page: FutFrontendPage;

  beforeEach(() => {
    page = new FutFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
