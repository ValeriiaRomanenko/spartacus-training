import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  AuthConfig,
  CmsConfig,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  DIALOG_TYPE,
  LayoutConfig,
  layoutConfig,
  mediaConfig,
  ViewConfig
} from '@spartacus/storefront';
import { environment } from '../../environments/environment';
import { stLayoutSlotsConfig } from './config/st-layout-slots.config';
import { stCmsComponentsConfig } from "./config/st-cms-components.config";
import { StRegisterModalComponent } from "../pages/register";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: environment.occPrefix,
        }
      }
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        baseSite: [environment.contextBaseSite],
        currency: [environment.contextCurrency],
        language: [environment.contextLanguage],
        theme: ['santorini']
      }
    }),
    provideConfig(<AuthConfig>{
      authentication: {
        client_id: environment.authenticationClientId,
        client_secret: environment.authenticationClientSecret,
        OAuthLibConfig: {
          requireHttps: true,
          scope: 'basic'
        }
      },
    }),
    provideConfig(<LayoutConfig>{
      launch: {
        LOGIN_MODAL: {
          inlineRoot: true,
          component: StRegisterModalComponent,
          dialogType: DIALOG_TYPE.POPOVER_CENTER_BACKDROP,
        },
      },
      layoutSlots: stLayoutSlotsConfig,
    }),
    // provideConfig(<LayoutConfig>{
    //   layoutSlots: stLayoutSlotsConfig
    // }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      }
    }),
    provideConfig(<CmsConfig>{
      cmsComponents: stCmsComponentsConfig
    }),
    provideConfig(<ViewConfig>{
      view: {
        infiniteScroll: {
          active: true,
          // productLimit: 10,
          showMoreButton: true,
        },
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    })
  ]
})
export class SpartacusConfigurationModule { }
