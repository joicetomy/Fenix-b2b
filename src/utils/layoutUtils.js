const PageTypes = {
  HOME: 'HOME',
  PLP: 'PLP',
  PDP: 'PDP',
  MYACCOUNT: 'MYACCOUNT',
  CLP: 'CLP',
  BLP: 'BLP',
  WISHLIST: 'WISHLIST',
  WISHLIST_EDIT: 'WISHLIST_EDIT',
  DELIVERY_DETAILS: 'DELIVERY_DETAILS',
  CART: 'CART',
  PAYMENT: 'PAYMENT',
  ORDER_CONFIRMATION: 'ORDER_CONFIRMATION',
  CHECKOUT: 'CHECKOUT',
  STORE_LOCATOR: 'STORE_LOCATOR',
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  PASSWORD_RESET: 'PASSWORD_RESET',
  CUSTOM: 'CUSTOM',
  TRACK_YOUR_ORDER: 'TRACK_YOUR_ORDER',
  NOTFOUND: 'NOTFOUND',
  BIP: 'BIP',
  ORDER_HISTORY: 'ORDER_HISTORY',
  ORDER_DETAILS: 'ORDER_DETAILS',
};

const sanityWidgetMapper = {
  faq: 'Faq',
  customerRepInfo: 'CustomerServiceRep',
  publicCustomerRepInfo: 'CustomerServiceRep',
  loginPage: 'Login',
  topPicks: 'TopPicks',
  bannerCarousal: 'BannerCarousel',
  pdpBasicDetails: 'PdpBasicDetails',
  pdpProductFeatures: 'PdpProductFeatures',
  pdpProductDescription: 'PdpProductDescription',
  pdpProductSpecification: 'PdpProductSpecification',
  pdpProductCare: 'PdpProductSpecification',
  pdpProductTechnicalDetails: 'PdpProductSpecification',
  catalogueBanner: 'CatalogsBanner',
  imageWithText: 'ImageWithText',
  richTextEditor: 'RichTextBox',
  titleWithLanguageSwitch: 'TitleWithLanguageSwitch',
  orderConfirmationContent: 'OrderConfirmation',
  wishlistHeader: 'WishlistHeader',
  wishlistTable: 'WishlistTable',
  whishlistDetails: 'WishlistEdit',
  plpHeader: 'PLPHeader',
  plpDetails: 'ProductListing',
  orderHistory: 'OrderHistory',
  profileBasicDetails: 'MyAccount',
  orderHistoryDetails: 'OrderDetails',
  verifyAddress: 'VerifyAddress',
  cartPage: 'Cart',
  headerSection: 'HeaderSection',
  imageComponent: 'ImageComponent',
  videoComponent: 'VideoComponent',
  switchAccountPage: 'SwitchAccount',
  forgotPasswordPage: 'ForgotPassword',
  resetPasswordPage: 'ResetPassword',
  createPasswordPage: 'CreatePassword',
  pricat: 'Pricat',
};

const sanityRichTextWidgetMapper = {
  termsAndConditions: 'Terms',
  privacyPolicy: 'Policy',
};

const WidgetMapper = {
  CAROUSAL_BANNER: 'BannerCarousel',
  TOP_PICKS: 'TopPicks',
  FEATURED_CATEGORIES: 'FeaturedCategory',
  FEATURED_PROMOTIONS: 'OfferZone',
  POPULAR_PRODUCTS: 'PopularProducts',
  SINGLE_BANNER: 'CatalogsBanner',
  BOTTOM_BANNER: 'BottomBanner',
  POPULAR_PRODUCTS_GROUP: 'PopularProductsGroup',
  QUICK_LINKS: 'QuickLinks',
  USP_ICONS: 'UspIcons',
  MY_ORDERS: 'MyOrders',
  ADDRESS_BOOK: 'AddressBook',
  MY_ADDRESSES: 'Addresses',
  GRID_TILES: 'GridTiles',
  CATEGORY_LIST: 'CategoryList',
  TABBED_BANNER: 'TabbedBanner',
  FEATURED_PRODUCTS: 'FeaturedProducts',
  DELIVERY_DETAILS: 'DeliveryDetails',
  APPROACHABLE_DISCOUNT_BAR: 'ApproachableDiscountBar',
  CART_PRICE_INFO: 'CartPriceInfo',
  CART_ITEMS: 'CartItems',
  TIME_LINE: 'TimeLine',
  PRODUCT_DETAILS: 'ProductDetails',
  PRODUCT_DESCRIPTION: 'ProductDescription',
  RELATED_PRODUCTS: 'RelatedProducts',
  PRODUCT_PROMOTIONS: 'ProductPromotions',
  WISHLIST_ITEMS: 'WishListItemList',
  EMPTY_WISHLIST: 'EmptyWishList',
  VIEWED_PRODUCTS: 'RecentlyViewed',
  BREADCRUMB: 'BreadCrumb',
  PRODUCT_LIST: 'ProductListing',
  PRODUCT_FILTERS: 'Filters',
  EMPTY_LIST: 'EmptyProductList',
  PRODUCT_POLICIES: 'ProductPolicies',
  PLP_BANNER: 'PlpBanner',
  SEO_INFO: 'SeoInfo',
  PAYMENT: 'Payment',
  PRODUCT_REVIEWS: 'ProductReviews',
  ORDER_CONFIRMATION: 'OrderConfirmation',
  STATIC_BANNER: 'StaticBanner',
  EMPTY_CART: 'EmptyCart',
  CHECKOUT: 'Checkout',
  HEADER: 'Header',
  HEADER_TAPE: 'HeaderTape',
  EVENT_BANNER: 'EventBanner',
  GENERAL_PREFERENCES: 'GeneralPreferences',
  LOGIN: 'Login',
  CONTACT_US: 'ContactUs',
  SIGNUP: 'Signup',
  PASSWORD_RESET: 'PasswordReset',
  SAVE_CARDS: 'SaveCards',
  PERSONAL_DETAILS: 'PersonalDetails',
  FOOTER: 'Footer',
  CATEGORY_FILTER: 'CategoryFilter',
  ACCOUNT_OVERVIEW: 'AccountOverview',
  LOYALTY_PROGRAMME: 'LoyaltyProgramme',
  STORE_LOCATOR: 'StoreLocator',
  CHANGE_PASSWORD: 'PasswordChange',
  BRAND_TITLE: 'BrandTitle',
  BRAND_PRODUCTS: 'BrandProducts',
  CUSTOM: 'Custom',
  CONTACT_US_FORM: 'ContactUsForm',
  TRACK_YOUR_ORDER: 'TrackYourOrder',
  BREADCRUMBS: 'Breadcrumbs',
  CLP_CATEGORY_LIST: 'ClpCategoryList',
  LOYALTY_PROMOTION: 'LoyaltyPromotion',
  NOTFOUND: 'NotFound',
  EXCLUSIVE_BRANDS: 'ExclusiveBrands',
  BRAND_LIST: 'BrandList',
  PLP_HEADER: 'PLPHeader',
  WISHLIST_TABLE: 'WishlistTable',
  WISHLIST_HEADER: 'WishlistHeader',
  WISHLIST_FILTER: 'WishlistFilter',
  ORDERS: 'Orders',
  ORDER_DETAILS: 'OrderDetails',
  ORDER_HISTORY: 'OrderHistory',
  MYACCOUNT: 'MyAccount',
};

const PageLayoutMapper = {
  HOME: {
    HOME_ALPHA: 'HomeLayoutAlpha',
    HOME_BETA: 'HomeLayoutBeta',
  },
  PLP: {
    PLP_ALPHA: 'PLPLayoutAlpha',
    PLP_BETA: 'PLPLayoutBeta',
  },
  PDP: {
    PDP_ALPHA: 'PDPLayout',
    PDP_BETA: 'PDPLayoutBeta',
  },
  CLP: {
    CLP_ALPHA: 'CLPLayoutAlpha',
    CLP_BETA: 'CLPLayoutBeta',
  },
  BLP: {
    BLP_WATSON: 'BLPLayoutAlpha',
  },
  WISHLIST: {
    WISHLIST_ALPHA: 'WishlistLayoutAlpha',
  },
  WISHLIST_EDIT: {
    WISHLIST_EDIT_ALPHA: 'WishlistEditLayoutAlpha',
  },
  WISHLIST_FILTER: {
    WISHLIST_FILTER_ALPHA: 'WishlistFilterAlpha',
  },
  DELIVERY_DETAILS: {
    DELIVERY_DETAILS_ALPHA: 'DeliveryDetailsLayoutAlpha',
    DELIVERY_DETAILS_BETA: 'DeliveryDetailsLayoutBeta',
  },
  CART: {
    CART_ALPHA: 'CartLayoutAlpha',
    CART_BETA: 'CartLayoutBeta',
  },
  PAYMENT: {
    PAYMENT_ALPHA: 'PaymentLayoutAlpha',
    PAYMENT_BETA: 'PaymentLayoutBeta',
  },
  ORDER_CONFIRMATION: {
    ORDER_CONFIRMATION_ALPHA: 'OrderConfirmationLayoutAlpha',
    ORDER_CONFIRMATION_BETA: 'OrderConfirmationLayoutBeta',
  },
  CHECKOUT: {
    CHECKOUT_BETA: 'CheckoutLayoutBeta',
  },
  MYACCOUNT: {
    MYACCOUNT_ALPHA: 'MyAccountLayoutAlpha',
    MYACCOUNT_BETA: 'MyAccountLayoutBeta',
  },
  STORE_LOCATOR: {
    STORE_LOCATOR: 'StoreLocatorLayout',
  },
  LOGIN: {
    LOGIN_ALPHA: 'LoginLayoutAlpha',
    LOGIN_BETA: 'LoginLayoutBeta',
  },
  SIGNUP: {
    SIGNUP_ALPHA: 'SignupLayoutAlpha',
    SIGNUP_BETA: 'SignupLayoutBeta',
  },
  PASSWORD_RESET: {
    PASSWORD_RESET_ALPHA: 'PasswordResetLayoutAlpha',
  },
  CUSTOM: {
    BASIC_CUSTOM_LAYOUT: 'BasicCustomLayout',
    BISECTION_LAYOUT: 'BiSectionLayout',
  },
  TRACK_YOUR_ORDER: {
    TRACK_YOUR_ORDER_BETA: 'TrackYourOrderLayoutBeta',
  },
  NOTFOUND: {
    NOTFOUND_ALPHA: 'NotFoundAlpha',
  },
  BIP: {
    BIP_WATSON: 'BIPLayoutAlpha',
  },
  ORDER_HISTORY: {
    ORDER_HISTORY_ALPHA: 'OrderLayoutAlpha',
  },
  ORDER_DETAILS: {
    ORDER_DETAILS_ALPHA: 'OrderDetailsLayoutAlpha',
  },
};

const WidgetLayoutMapper = {
  CAROUSAL_BANNER: {
    CAROUSAL_BANNER_ALPHA: 'BannerCarouselAlpha',
    CAROUSAL_BANNER_WATSON: 'BannerCarouselAlpha',
  },
  FEATURED_CATEGORIES: {
    FEATURED_CATEGORIES_ALPHA: 'FeaturedCategoryAlpha',
    FEATURED_CATEGORIES_WATSON: 'FeaturedCategoryWatson',
  },
  TOP_PICKS: {
    TOP_PICKS_ALPHA: 'TopPicksAlpha',
  },
  BOTTOM_BANNER: {
    BOTTOM_BANNER_ALPHA: 'BottomBannerAlpha',
  },
  FEATURED_PROMOTIONS: {
    FEATURED_PROMOTIONS_ALPHA: 'FeaturedPromotionAlpha',
  },
  SINGLE_BANNER: {
    SINGLE_BANNER_ALPHA: 'PromotionBannerAlpha',
    SINGLE_BANNER_BETA: 'PromotionBannerWatson',
    SINGLE_BANNER_GAMA: 'PromotionBannerGama',
    SINGLE_BANNER_BETA1: 'PromotionBannerBeta',
  },
  POPULAR_PRODUCTS: {
    POPULAR_PRODUCTS_ALPHA: 'PopularProductsLayoutAlpha',
  },
  POPULAR_PRODUCTS_GROUP: {
    POPULAR_PRODUCTS_GROUP_ALPHA: 'PopularProductsGroupAlpha',
  },
  QUICK_LINKS: {
    QUICK_LINKS_ALPHA: 'QuickLinksAlpha',
    QUICK_LINKS_WATSON: 'QuickLinksWatson',
  },
  PAGE_HEADER: {
    PAGE_HEADER_ALPHA: 'AppHeaderAlpha',
    PAGE_HEADER_WATSON: 'AppHeaderWatson',
    PAGE_HEADER_ACE: 'AppHeaderAce',
    PAGE_HEADER_TOYSRUS: 'AppHeaderToysrus',
    PAGE_HEADER_WATSON_HOME_SM: 'AppHeaderWatsonHomeSM',
    PAGE_HEADER_WATSON_SM: 'AppHeaderWatsonSM',
    CHECKOUT_HEADER_ALPHA: 'CheckoutHeaderAlpha',
    CHECKOUT_HEADER_BETA: 'CheckoutHeaderBeta',
    CHECKOUT_HEADER_ACE: 'CheckoutHeaderAce',
    CHECKOUT_HEADER_TOYSRUS: 'CheckoutHeaderToysrus',
  },
  PAGE_FOOTER: {
    PAGE_FOOTER_ALPHA: 'FooterAlpha',
    PAGE_FOOTER_WATSON: 'AppFooterGama',
    PAGE_FOOTER_WATSON_SM: 'AppFooterGamaSM',
    CHECKOUT_FOOTER_BETA: 'CheckoutFooterBeta',
  },
  HEADER_TAPE: {
    HEADER_TAPE_ALPHA: 'HeaderTapeAlpha',
  },
  USP_ICONS: {
    USP_ICONS_ALPHA: 'UspIconsAlpha',
  },
  MY_ORDERS: {
    MY_ORDERS_ALPHA: 'MyOrdersLayoutAlpha',
    MY_ORDERS_BETA: 'MyOrdersLayoutBeta',
  },
  ADDRESS_BOOK: {
    ADDRESS_BOOK_ALPHA: 'AddressBookAlpha',
    ADDRESS_BOOK_BETA: 'AddressBookBeta',
  },
  MY_ADDRESSES: {
    MY_ADDRESSES_ALPHA: 'MyAddressLayoutAlpha',
    MY_ADDRESSES_BETA: 'MyAddressLayoutBeta',
  },
  ACCOUNT_OVERVIEW: {
    ACCOUNT_OVERVIEW_BETA: 'AccountOverviewBeta',
  },
  LOYALTY_PROGRAMME: {
    LOYALTY_PROGRAMME_BETA: 'LoyaltyProgrammeBeta',
  },
  PERSONAL_DETAILS: {
    PERSONAL_DETAILS_BETA: 'PersonalDetailsBeta',
  },
  CHANGE_PASSWORD: {
    CHANGE_PASSWORD_BETA: 'PasswordChangeBeta',
  },
  SAVE_CARDS: {
    SAVE_CARDS_BETA: 'SaveCardsBeta',
  },
  GENERAL_PREFERENCES: {
    GENERAL_PREFERENCES_BETA: 'GeneralPreferenceBeta',
  },
  GRID_TILES: {
    SINGLE_GRID_TILE: 'SingleGridTile',
    TWO_GRID_TILES: 'TwoGridTiles',
    TWO_GRID_TILES_BETA: 'TwoGridTilesBeta',
    TWO_GRID_TILES_VERTICAL: 'TwoGridTilesVertical',
  },
  CATEGORY_LIST: {
    CATEGORY_LIST_ALPHA: 'CategoryListAlpha',
  },
  TABBED_BANNER: {
    TABBED_BANNER_ALPHA: 'TabbedBannerAlpha',
    TABBED_BANNER_ALPHA_SM: 'TabbedBannerAlphaSm',
  },
  FEATURED_PRODUCTS: {
    FEATURED_PRODUCTS_ALPHA: 'FeaturedProductsAlpha',
    FEATURED_PRODUCTS_BETA: 'FeaturedProductsBeta',
  },
  DELIVERY_DETAILS: {
    DELIVERY_DETAILS_ALPHA: 'DeliveryDetailsAlpha',
    DELIVERY_DETAILS_BETA: 'DeliveryDetailsBeta',
  },
  APPROACHABLE_DISCOUNT_BAR: {
    APPROACHABLE_DISCOUNT_BAR_ALPHA: 'ApproachableDiscountBarAlpha',
  },
  CART_PRICE_INFO: {
    CART_PRICE_INFO_ALPHA: 'CartPriceInfoAlpha',
    CART_PRICE_INFO_BETA: 'CartPriceInfoBeta',
  },
  CART_ITEMS: {
    CART_ITEMS_ALPHA: 'CartItemsAlpha',
    CART_ITEMS_BETA: 'CartItemsBeta',
  },
  TIME_LINE: {
    TIME_LINE_ALPHA: 'TimeLineAlpha',
  },
  PRODUCT_DETAILS: {
    PRODUCT_DETAILS_BETA: 'ProductDetailsBeta',
    PRODUCT_DETAILS_ALPHA: 'ProductDetailsAlpha',
  },
  PRODUCT_DESCRIPTION: {
    PRODUCT_DESCRIPTION_BETA: 'ProductDescriptionLayoutBeta',
    PRODUCT_DESCRIPTION_ALPHA: 'ProductDescriptionLayoutAlpha',
  },
  RELATED_PRODUCTS: {
    RELATED_PRODUCTS_ALPHA: 'RelatedProductsLayoutAlpha',
    RELATED_PRODUCTS_BETA: 'RelatedProductsLayoutBeta',
  },
  PRODUCT_PROMOTIONS: {
    PRODUCT_PROMOTIONS_ALPHA: 'ProductPromotionLayoutAlpha',
  },
  PRODUCT_POLICIES: {
    PRODUCT_POLICIES_ALPHA: 'ProductPolicyLayoutAlpha',
  },
  WISHLIST_ITEMS: {
    WISHLIST_ITEMS_ALPHA: 'WishListItemListAlpha',
  },
  EMPTY_WISHLIST: {
    EMPTY_WISHLIST_ALPHA: 'EmptyWishListAlpha',
  },
  VIEWED_PRODUCTS: {
    VIEWED_PRODUCTS_ALPHA: 'RecentlyViewedAlpha',
  },
  PRODUCT_LIST: {
    PRODUCT_LIST_ALPHA: 'ProductListAlpha',
    PRODUCT_LIST_BETA: 'ProductListBeta',
  },
  PRODUCT_FILTERS: {
    PRODUCT_FILTERS_ALPHA: 'FilterViewAlpha',
    PRODUCT_FILTERS_BETA: 'FilterViewBeta',
    PRODUCT_FILTERS_BETA_SM: 'FilterViewBetaSM',
  },
  EMPTY_LIST: {
    EMPTY_LIST_ALPHA: 'EmptyProductListAlpha',
  },
  PLP_BANNER: {
    PLP_BANNER_ALPHA: 'PlpBannerAlpha',
  },
  SEO_INFO: {
    SEO_INFO_BETA: 'SeoInfoBeta',
  },
  PAYMENT: {
    PAYMENT_ALPHA: 'PaymentAlpha',
    PAYMENT_BETA: 'PaymentBeta',
  },
  PRODUCT_REVIEWS: {
    PRODUCT_REVIEWS_ALPHA: 'ProductReviewsLayoutAlpha',
  },
  ORDER_CONFIRMATION: {
    ORDER_CONFIRMATION_ALPHA: 'OrderConfirmationAlpha',
    ORDER_CONFIRMATION_BETA: 'OrderConfirmationBeta',
  },
  STATIC_BANNER: {
    STATIC_BANNER_ALPHA: 'StaticBannerAlpha',
  },
  EMPTY_CART: {
    EMPTY_CART_ALPHA: 'EmptyCartAlpha',
  },
  CHECKOUT: {
    CHECKOUT_BETA: 'CheckoutBeta',
  },
  EVENT_BANNER: {
    EVENT_BANNER_ALPHA: 'EventBannerAlpha',
  },
  LOGIN: {
    LOGIN_ALPHA: 'LoginAlpha',
    LOGIN_BETA: 'LoginBeta',
  },
  CONTACT_US: {
    CONTACT_US_ALPHA: 'ContactUsAlpha',
  },
  SIGNUP: {
    SIGNUP_ALPHA: 'SignupAlpha',
    SIGNUP_BETA: 'SignupBeta',
  },
  PASSWORD_RESET: {
    PASSWORD_RESET_ALPHA: 'PasswordResetAlpha',
  },
  CATEGORY_FILTER: {
    CATEGORY_FILTER_BETA: 'CategoryFilterBeta',
  },
  CART_MESSAGE: {
    CART_MESSAGE_BETA: 'CartMessageBeta',
  },
  STORE_LOCATOR: {
    STORE_LOCATOR: 'StoreLocatorBeta',
  },
  BRAND_TITLE: {
    BRAND_TITLE_ALPHA: 'BrandTitleAlpha',
  },
  BRAND_PRODUCTS: {
    BRAND_PRODUCTS_ALPHA: 'BrandProductsAlpha',
  },
  TRACK_YOUR_ORDER: {
    TRACK_YOUR_ORDER_BETA: 'TrackYourOrderBeta',
  },
  BREADCRUMBS: {
    BREADCRUMBS_ALPHA: 'BreadcrumbsAlpha',
    BREADCRUMBS_BETA: 'BreadcrumbsBeta',
  },
  CLP_CATEGORY_LIST: {
    CLP_CATEGORY_LIST_ALPHA: 'ClpCategoryListAlpha',
  },
  LOYALTY_PROMOTION: {
    LOYALTY_PROMOTION_BETA: 'LoyaltyPromotionBeta',
  },
  NOTFOUND: {
    NOTFOUND_ALPHA: 'NotFoundWatsons',
  },
  EXCLUSIVE_BRANDS: {
    EXCLUSIVE_BRANDS_WATSON: 'ExclusiveBrandsWatson',
  },
  BRAND_LIST: {
    BRAND_LIST_WATSON: 'BrandListWatson',
  },
  ORDERS: {
    ORDERS_ALPHA: 'Orders',
  },
  ORDER_DETAILS: {
    ORDER_DETAILS_ALPHA: 'OrderDetailsAlpha',
  },
};

const getPageLayoutFileName = (pageType, layoutId) => {
  const pageMapper = PageLayoutMapper[pageType];
  return pageMapper ? pageMapper[layoutId] : null;
};

const getWidgetLayoutFileName = (widgetType, layoutId) => {
  const widgetMapper = WidgetLayoutMapper[widgetType];
  return widgetMapper ? widgetMapper[layoutId] : null;
};

const getSanityWidget = widgetType => sanityWidgetMapper[widgetType] || null;

const getSanityRichTextWidgetMapper = widgetType => sanityRichTextWidgetMapper[widgetType] || null;

const getMappedWidgetName = widgetType => WidgetMapper[widgetType];

module.exports = { PageTypes, getPageLayoutFileName, getWidgetLayoutFileName, getMappedWidgetName, getSanityWidget, getSanityRichTextWidgetMapper };
