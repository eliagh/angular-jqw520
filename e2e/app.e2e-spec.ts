import { AngularJqwidgetsPage } from './app.po';

describe('angular-jqwidgets App', () => {
  let page: AngularJqwidgetsPage;

  beforeEach(() => {
    page = new AngularJqwidgetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
