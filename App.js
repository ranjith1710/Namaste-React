// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
/* Header
  Logo
  Nav-items
Body
  Search
  res-container
    res-card
Footer
  Copyright
  links
  contacts
  address */

const resList = [
  {
    info: {
      id: "176463",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "ECR Skyline",
      areaName: "Palavakkam",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "176463",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 7400
      },
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 02:45:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-ecr-skyline-palavakkam-chennai-176463",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "500433",
      name: "EatFit",
      cloudinaryImageId: "ee4f041cd8611dccc19f4267783ab5ea",
      locality: "Pillaiyar Koil Street",
      areaName: "Velachery",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "500433",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:59:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹159"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-pillaiyar-koil-street-velachery-chennai-500433",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "17818",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Vijaya Nagar",
      areaName: "Velachery",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "17818",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4900
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 02:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-vijaya-nagar-velachery-chennai-17818",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "9798",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Pheonix Marketcity",
      areaName: "Velachery",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "9798",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4300
      },
      parentId: "166",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-pheonix-marketcity-velachery-chennai-9798",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "444674",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "o18xlrtaxapi2bq7rpoz",
      locality: "Thoraipakkam",
      areaName: "OMR Perungudi",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "444674",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6600
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 6600
      },
      parentId: "10496",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 16:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/andhra-gunpowder-thoraipakkam-omr-perungudi-chennai-444674",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "38897",
      name: "Domino's Pizza",
      cloudinaryImageId: "aeblcukhjldkibnfxyli",
      locality: "Near Csi Church",
      areaName: "Velachery",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "38897",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 02:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-near-csi-church-velachery-chennai-38897",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "635017",
      name: "Soul Rasa",
      cloudinaryImageId: "na6owwmzmw4vy7xpsnde",
      locality: "Dhandeeshwaram main road",
      areaName: "Madipakkam",
      costForTwo: "₹300 for two",
      cuisines: [
        "Indian",
        "Healthy Food",
        "Home Food",
        "South Indian",
        "North Indian"
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "635017",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4300
      },
      parentId: "239281",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:30:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/soul-rasa-dhandeeshwaram-main-road-madipakkam-chennai-635017",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "37626",
      name: "Sangeetha Veg Restaurant",
      cloudinaryImageId: "dpcd0busd8jvj6urotka",
      locality: "Gst Road",
      areaName: "St. Thomas Mount",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Indian", "North Indian", "South Indian"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "37626",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6600
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 6600
      },
      parentId: "1260",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 22:30:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gst-road-st-thomas-mount-chennai-37626",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "6448",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "szk3pgvxlqlthkppvryi",
      locality: "Vijayanagar",
      areaName: "Velachery",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "6448",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "22",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 22:45:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-vijayanagar-velachery-chennai-6448",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "48501",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Velachery",
      areaName: "100 Feet Bypass Road",
      costForTwo: "₹350 for two",
      cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "48501",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4300
      },
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 03:50:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-velachery-100-feet-bypass-road-chennai-48501",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "182584",
      name: "Homely",
      cloudinaryImageId: "howfl9cufkfacf9wdbux",
      locality: "Dhandeeshwaram Main Road",
      areaName: "Madipakkam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "North Indian",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis"
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "182584",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4300
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4300
      },
      parentId: "4043",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 16:30:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/homely-dhandeeshwaram-main-road-madipakkam-chennai-182584",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "167377",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "nvdkb7site4g5mvnqpay",
      locality: "Bazar Road",
      areaName: "Madipakkam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "167377",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "4925",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 03:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bazar-road-madipakkam-chennai-167377",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "57491",
      name: "Cool Coco Day",
      cloudinaryImageId: "bxn09rovnrejasj87bi0",
      locality: "1st Main Road",
      areaName: "Velachery",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Juices"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "57491",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "11671",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 01:00:00",
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cool-coco-day-1st-main-road-velachery-chennai-57491",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "28879",
      name: "Sea Emperor",
      cloudinaryImageId: "g5ibrtiekoysrtivyooy",
      locality: "Velachery Main Road",
      areaName: "Madipakkam",
      costForTwo: "₹350 for two",
      cuisines: ["Barbecue", "Biryani", "Arabian", "Tandoor"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "28879",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "6772",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 02:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sea-emperor-velachery-main-road-madipakkam-chennai-28879",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "14670",
      name: "Salem RR Biriyani Unavagam",
      cloudinaryImageId: "lmaqiwy39dleyfadfmnn",
      locality: "Ganapathi Nagar",
      areaName: "Velachery",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chettinad", "Tandoor", "Chinese"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "14670",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "176137",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/salem-rr-biriyani-unavagam-ganapathi-nagar-velachery-chennai-14670",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "35055",
      name: "Buhari",
      cloudinaryImageId: "q6bmci7h3t7df6wuidls",
      locality: "Taramani Link Road",
      areaName: "Velachery",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chinese", "North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "35055",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4900
      },
      parentId: "164",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 00:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/buhari-taramani-link-road-velachery-chennai-35055",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "184028",
      name: "The Belgian Waffle Cafe",
      cloudinaryImageId: "9f1be931bfab0bbe184686034fdc834c",
      locality: "Selvanaar extension",
      areaName: "Velachery",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "184028",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "10384",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:59:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-cafe-selvanaar-extension-velachery-chennai-184028",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "13275",
      name: "Kumarakom",
      cloudinaryImageId: "cffj2aoasyj5eaxlqkdk",
      locality: "Velachery",
      areaName: "Velachery",
      costForTwo: "₹450 for two",
      cuisines: ["Kerala", "South Indian", "Chinese"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "13275",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3400
      },
      parentId: "576",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-05 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kumarakom-velachery-chennai-13275",
      type: "WEBLINK"
    }
  },
  {
    info: {
      id: "381867",
      name: "Junior Kuppanna",
      cloudinaryImageId: "b6abf547981693bc72fa6c055fec9963",
      locality: "Sasi nagar",
      areaName: "Velachery",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "South Indian", "North Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "381867",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6300
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 6300
      },
      parentId: "112209",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-06 01:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/junior-kuppanna-sasi-nagar-velachery-chennai-381867",
      type: "WEBLINK"
    }
  }
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.zi8h7_pHl9xzxmMhHgPJegHaG2&pid=Api&P=0&h=180"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurant = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData.info;

  const { slaString } = sla;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Logo"
        className="res-img"
      />
      <h3> {name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resList.map(restaurant => (
          <Restaurant key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

//creates a Root for ReactDOM where all the DOM manipulation can be done
const root = ReactDOM.createRoot(document.getElementById("root"));

//converts react element object into HTML element
root.render(<App />);
