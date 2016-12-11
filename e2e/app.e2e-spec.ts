import { NigelFinancialPlannerPage } from './app.po';

describe('nigel-financial-planner App', function() {
  let page: NigelFinancialPlannerPage;

  beforeEach(() => {
    page = new NigelFinancialPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
