import { NgChartPage } from './app.po';

describe('ng-chart App', () => {
  let page: NgChartPage;

  beforeEach(() => {
    page = new NgChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
