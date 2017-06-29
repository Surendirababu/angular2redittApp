import { ReditappPage } from './app.po';

describe('reditapp App', () => {
  let page: ReditappPage;

  beforeEach(() => {
    page = new ReditappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
