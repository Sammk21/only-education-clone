import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    blurhash: Attribute.Text;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiGoogleAuthGoogleCredential
  extends Schema.SingleType {
  collectionName: 'strapi-google-auth_google-credential';
  info: {
    displayName: 'Google Credentials';
    singularName: 'google-credential';
    pluralName: 'google-credentials';
    description: 'Stores google project credentials';
    tableName: 'google_auth_creds';
  };
  options: {
    privateAttributes: ['id', 'created_at'];
    populateCreatorFields: true;
    draftAndPublish: true;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    google_client_id: Attribute.String & Attribute.Required;
    google_client_secret: Attribute.String & Attribute.Required;
    google_redirect_url: Attribute.String & Attribute.Required;
    google_scopes: Attribute.JSON & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-google-auth.google-credential',
      'oneToOne',
      'admin::user'
    >;
    updatedBy: Attribute.Relation<
      'plugin::strapi-google-auth.google-credential',
      'oneToOne',
      'admin::user'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    reviews: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::review.review'
    >;
    articles: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::article.article'
    >;
    picture: Attribute.Media;
    job: Attribute.String;
    firstName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    lastName: Attribute.String;
    enquiries: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::enquiry.enquiry'
    >;
    phone: Attribute.String & Attribute.Required;
    verified: Attribute.Boolean & Attribute.DefaultTo<false>;
    last_otp_request: Attribute.DateTime;
    resend_attempts: Attribute.Integer & Attribute.DefaultTo<3>;
    otp_session: Attribute.String;
    last_phone_update: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSchedulerScheduler extends Schema.CollectionType {
  collectionName: 'scheduler_scheduler';
  info: {
    collectionName: 'scheduler';
    singularName: 'scheduler';
    pluralName: 'scheduler';
    displayName: 'scheduler';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    scheduledDatetime: Attribute.DateTime;
    uid: Attribute.String;
    contentId: Attribute.BigInteger;
    scheduleType: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::scheduler.scheduler',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::scheduler.scheduler',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginTodoTask extends Schema.CollectionType {
  collectionName: 'todo_task';
  info: {
    tableName: 'task';
    singularName: 'task';
    pluralName: 'tasks';
    displayName: 'Task';
    description: 'A task in Strapi';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    isDone: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<'plugin::todo.task', 'morphToOne'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::todo.task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::todo.task',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::article.article', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'api::category.category'
    >;
    ckeditor_content: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    authorName: Attribute.Enumeration<
      [
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    author: Attribute.Relation<
      'api::article.article',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    recommendedArticle: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    articles: Attribute.Relation<
      'api::article.article',
      'oneToMany',
      'api::article.article'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::article.article',
      'oneToMany',
      'api::article.article'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages';
  info: {
    singularName: 'blog-page';
    pluralName: 'blog-pages';
    displayName: 'BlogPage';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    header: Attribute.Component<'shared.header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    categoryText: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    articlesPerPage: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    blocks: Attribute.DynamicZone<['blocks.cta-command-line', 'blocks.cta']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToMany',
      'api::blog-page.blog-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::category.category', 'name'>;
    articles: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::article.article'
    >;
    news: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::new.new'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'City';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::city.city', 'title'>;
    university: Attribute.Relation<
      'api::city.city',
      'oneToMany',
      'api::university.university'
    >;
    cityIcon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::country.country', 'title'>;
    countryProfile: Attribute.Component<'blocks.profiles'>;
    whyThisCountry: Attribute.Component<'blocks.why-abroad'> &
      Attribute.Required;
    eligibilityCriteria: Attribute.Component<'blocks.eligibility-card'>;
    feesStructure: Attribute.Component<'blocks.eligibility-table'>;
    topUniversitiesInCountry: Attribute.Component<'blocks.features-with-images'>;
    faq: Attribute.Component<'blocks.faq'>;
    university: Attribute.Relation<
      'api::country.country',
      'manyToOne',
      'api::university.university'
    >;
    noOfStudentsStudying: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    authorName: Attribute.Enumeration<
      [
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen'
      ]
    > &
      Attribute.Required;
    cta: Attribute.Component<'blocks.cta'>;
    overview: Attribute.Component<'shared.header'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCourseCourse extends Schema.CollectionType {
  collectionName: 'courses';
  info: {
    singularName: 'course';
    pluralName: 'courses';
    displayName: 'Course';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::course.course', 'title'>;
    courseFullForm: Attribute.String;
    overviewTabs: Attribute.Component<'courses.overview-tabs'>;
    syllabus_subject: Attribute.Component<'courses.syllabus-subject'>;
    universities: Attribute.Relation<
      'api::course.course',
      'manyToMany',
      'api::university.university'
    >;
    durationYear: Attribute.Integer & Attribute.Required;
    stream: Attribute.Relation<
      'api::course.course',
      'manyToOne',
      'api::stream.stream'
    >;
    seo: Attribute.Component<'shared.seo'>;
    cta: Attribute.Component<'blocks.cta'> & Attribute.Required;
    faq: Attribute.Component<'blocks.faq'> & Attribute.Required;
    authorName: Attribute.Enumeration<
      [
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen',
        'Dweep',
        'Raviraj'
      ]
    >;
    jobs: Attribute.Component<'courses.jobs'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::course.course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEnquiryEnquiry extends Schema.CollectionType {
  collectionName: 'enquiries';
  info: {
    singularName: 'enquiry';
    pluralName: 'enquiries';
    displayName: 'Enquiry';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    users_permissions_user: Attribute.Relation<
      'api::enquiry.enquiry',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    enquires: Attribute.Component<'shared.enquiry', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::enquiry.enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::enquiry.enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEntranceExamEntranceExam extends Schema.CollectionType {
  collectionName: 'entrance_exams';
  info: {
    singularName: 'entrance-exam';
    pluralName: 'entrance-exams';
    displayName: 'Entrance-exam';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::entrance-exam.entrance-exam', 'title'> &
      Attribute.Required;
    cta: Attribute.Component<'blocks.cta'> & Attribute.Required;
    faq: Attribute.Component<'blocks.faq'> & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    authorName: Attribute.Enumeration<
      [
        'Garima',
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen',
        'Dweep',
        'Raviraj'
      ]
    > &
      Attribute.Required;
    overviewTabs: Attribute.Component<'entrance-exams.entrance-exams'>;
    resultsTab: Attribute.Component<'entrance-exams.results-tab'>;
    cutoff: Attribute.Component<'entrance-exams.cutoff'>;
    previousPapers: Attribute.Component<
      'entrance-exams.previous-papers',
      true
    > &
      Attribute.Required;
    stream: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'oneToOne',
      'api::stream.stream'
    >;
    searchableImage: Attribute.Media & Attribute.Required;
    mode: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'oneToOne',
      'api::mode.mode'
    >;
    applicationDate: Attribute.Date;
    examinationDate: Attribute.Date;
    resultDate: Attribute.Date;
    streams: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'manyToMany',
      'api::stream.stream'
    >;
    fullForm: Attribute.String & Attribute.Required;
    universities: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'manyToMany',
      'api::university.university'
    >;
    examlevel: Attribute.Enumeration<['national', 'international']>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 120;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::entrance-exam.entrance-exam',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
    versions: {
      versioned: true;
    };
  };
  attributes: {
    navigation: Attribute.Component<'global.navigation'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer: Attribute.Component<'global.footer'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dropdown: Attribute.Component<'blocks.dropdown', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::global.global',
      'oneToMany',
      'api::global.global'
    >;
    locale: Attribute.String;
  };
}

export interface ApiIndianCollegeIndianCollege extends Schema.CollectionType {
  collectionName: 'indian_colleges';
  info: {
    singularName: 'indian-college';
    pluralName: 'indian-colleges';
    displayName: 'Indian College';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    globalProfiles: Attribute.Component<'blocks.profiles', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::indian-college.indian-college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::indian-college.indian-college',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndianStateIndianState extends Schema.CollectionType {
  collectionName: 'indian_states';
  info: {
    singularName: 'indian-state';
    pluralName: 'indian-states';
    displayName: 'Indian States';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID;
    universities: Attribute.Relation<
      'api::indian-state.indian-state',
      'oneToMany',
      'api::university.university'
    >;
    streamIcon: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::indian-state.indian-state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::indian-state.indian-state',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Schema.SingleType {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'Landing page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    hero: Attribute.Component<'blocks.hero'>;
    experienceRail: Attribute.Component<'blocks.exp-block'>;
    topUniversities: Attribute.Component<'blocks.features-with-images'>;
    services: Attribute.Component<'blocks.services'>;
    whyOnlyEducation: Attribute.Component<'blocks.why-us'>;
    articles: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::article.article'
    >;
    news: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::new.new'
    >;
    bannerImage: Attribute.Media;
    courses: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::course.course'
    >;
    entrance_exams: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::entrance-exam.entrance-exam'
    >;
    cities: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToMany',
      'api::city.city'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModeMode extends Schema.CollectionType {
  collectionName: 'modes';
  info: {
    singularName: 'mode';
    pluralName: 'modes';
    displayName: 'Mode';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::mode.mode', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::mode.mode', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::mode.mode', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNavLinkNavLink extends Schema.SingleType {
  collectionName: 'nav_links';
  info: {
    singularName: 'nav-link';
    pluralName: 'nav-links';
    displayName: 'Nav Link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    navigation: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nav-link.nav-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nav-link.nav-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewNew extends Schema.CollectionType {
  collectionName: 'news';
  info: {
    singularName: 'new';
    pluralName: 'news';
    displayName: 'News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    live: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.UID<'api::new.new', 'title'>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'shared.seo', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ckeditor_content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    authorName: Attribute.Enumeration<
      [
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category: Attribute.Relation<
      'api::new.new',
      'manyToOne',
      'api::category.category'
    >;
    recommendedNews: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    news: Attribute.Relation<'api::new.new', 'oneToMany', 'api::new.new'>;
    relatedUniversities: Attribute.Relation<
      'api::new.new',
      'oneToMany',
      'api::university.university'
    >;
    admin_user: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'>;
    entrance_exams: Attribute.Relation<
      'api::new.new',
      'oneToMany',
      'api::entrance-exam.entrance-exam'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::new.new',
      'oneToMany',
      'api::new.new'
    >;
    locale: Attribute.String;
  };
}

export interface ApiOwnershipOwnership extends Schema.CollectionType {
  collectionName: 'ownerships';
  info: {
    singularName: 'ownership';
    pluralName: 'ownerships';
    displayName: 'Ownership';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ownership.ownership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ownership.ownership',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRankingRanking extends Schema.CollectionType {
  collectionName: 'rankings';
  info: {
    singularName: 'ranking';
    pluralName: 'rankings';
    displayName: 'Ranking';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    publisherName: Attribute.String;
    publisherImage: Attribute.Media;
    slug: Attribute.UID<'api::ranking.ranking', 'publisherName'>;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ranking.ranking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ranking.ranking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: 'reviews';
  info: {
    singularName: 'review';
    pluralName: 'reviews';
    displayName: 'review';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    content: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    note: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
    author: Attribute.Relation<
      'api::review.review',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::review.review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::review.review',
      'oneToMany',
      'api::review.review'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSpecializationSpecialization extends Schema.CollectionType {
  collectionName: 'specializations';
  info: {
    singularName: 'specialization';
    pluralName: 'specializations';
    displayName: 'Specialization';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    fullFrom: Attribute.String;
    slug: Attribute.UID<'api::specialization.specialization', 'title'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::specialization.specialization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStreamStream extends Schema.CollectionType {
  collectionName: 'streams';
  info: {
    singularName: 'stream';
    pluralName: 'streams';
    displayName: 'Stream';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.UID<'api::stream.stream', 'title'>;
    universities: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::university.university'
    >;
    broucher: Attribute.Media;
    streamIcon: Attribute.Media;
    entrance_exams: Attribute.Relation<
      'api::stream.stream',
      'manyToMany',
      'api::entrance-exam.entrance-exam'
    >;
    courses: Attribute.Relation<
      'api::stream.stream',
      'oneToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStudyAbroadStudyAbroad extends Schema.SingleType {
  collectionName: 'study_abroads';
  info: {
    singularName: 'study-abroad';
    pluralName: 'study-abroads';
    displayName: 'study-abroad';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    eligibilityTable: Attribute.Component<'blocks.eligibility-table', true>;
    whyAbroad: Attribute.Component<'blocks.why-us'>;
    popularCourses: Attribute.Component<'blocks.popular-courses'>;
    faq: Attribute.Component<'blocks.faq'>;
    topUniversities: Attribute.Component<'blocks.features-with-images'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::study-abroad.study-abroad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::study-abroad.study-abroad',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStudyIndiaStudyIndia extends Schema.SingleType {
  collectionName: 'study_indias';
  info: {
    singularName: 'study-india';
    pluralName: 'study-indias';
    displayName: 'Study-india';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    indiaProfile: Attribute.Component<'blocks.profiles', true>;
    whyIndia: Attribute.Component<'global.why-india'>;
    facts: Attribute.Component<'shared.list-with-heading', true>;
    explore: Attribute.Component<'global.explore'>;
    eligibilityTable: Attribute.Component<'blocks.eligibility-table', true>;
    faq: Attribute.Component<'blocks.faq'>;
    topUniversities: Attribute.Component<'blocks.features-with-images'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::study-india.study-india',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::study-india.study-india',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUniversityUniversity extends Schema.CollectionType {
  collectionName: 'universities';
  info: {
    singularName: 'university';
    pluralName: 'universities';
    displayName: 'University';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::university.university', 'title'> &
      Attribute.Required;
    universityProfile: Attribute.Component<'blocks.profiles'> &
      Attribute.Required;
    cta: Attribute.Component<'blocks.cta'>;
    faq: Attribute.Component<'blocks.faq'> & Attribute.Required;
    countries: Attribute.Relation<
      'api::university.university',
      'oneToMany',
      'api::country.country'
    >;
    noOfStudentsStudying: Attribute.String;
    seo: Attribute.Component<'shared.seo'>;
    authorName: Attribute.Enumeration<
      [
        'Omkar',
        'Sam',
        'Sarfraj',
        'Adesh',
        'Dhanashree',
        'Afreen',
        'Ketkki',
        'Premita',
        'Yogita',
        'Zhankana',
        'Parveen',
        'Dweep',
        'Raviraj'
      ]
    > &
      Attribute.Required;
    ownership: Attribute.Relation<
      'api::university.university',
      'oneToOne',
      'api::ownership.ownership'
    >;
    searchableImage: Attribute.Media;
    indian_state: Attribute.Relation<
      'api::university.university',
      'manyToOne',
      'api::indian-state.indian-state'
    >;
    overviewTabs: Attribute.Component<'university.overview-tabs'> &
      Attribute.Required;
    coursesFees: Attribute.Component<'university.courses-fees'> &
      Attribute.Required;
    admission: Attribute.Component<'university.admission'> & Attribute.Required;
    placements: Attribute.Component<'university.placements'> &
      Attribute.Required;
    gallery: Attribute.Component<'university.gallery'> & Attribute.Required;
    faculty: Attribute.Component<'university.faculty'> & Attribute.Required;
    hostel: Attribute.Component<'university.hostel'> & Attribute.Required;
    scholarships: Attribute.Component<'university.scholarships'> &
      Attribute.Required;
    city: Attribute.Relation<
      'api::university.university',
      'manyToOne',
      'api::city.city'
    >;
    streams: Attribute.Relation<
      'api::university.university',
      'manyToMany',
      'api::stream.stream'
    >;
    rankingCourses: Attribute.Component<'shared.ranking-component', true>;
    rankingStreams: Attribute.Component<'shared.ranking-streams', true>;
    collegeCourseManager: Attribute.Component<
      'university.college-course-manager',
      true
    >;
    affiliatedMan: Attribute.Component<'university.affi-m'>;
    entrance_exams: Attribute.Relation<
      'api::university.university',
      'manyToMany',
      'api::entrance-exam.entrance-exam'
    >;
    courses: Attribute.Relation<
      'api::university.university',
      'manyToMany',
      'api::course.course'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::university.university',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::university.university',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::strapi-google-auth.google-credential': PluginStrapiGoogleAuthGoogleCredential;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::scheduler.scheduler': PluginSchedulerScheduler;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::todo.task': PluginTodoTask;
      'api::article.article': ApiArticleArticle;
      'api::blog-page.blog-page': ApiBlogPageBlogPage;
      'api::category.category': ApiCategoryCategory;
      'api::city.city': ApiCityCity;
      'api::country.country': ApiCountryCountry;
      'api::course.course': ApiCourseCourse;
      'api::enquiry.enquiry': ApiEnquiryEnquiry;
      'api::entrance-exam.entrance-exam': ApiEntranceExamEntranceExam;
      'api::global.global': ApiGlobalGlobal;
      'api::indian-college.indian-college': ApiIndianCollegeIndianCollege;
      'api::indian-state.indian-state': ApiIndianStateIndianState;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::mode.mode': ApiModeMode;
      'api::nav-link.nav-link': ApiNavLinkNavLink;
      'api::new.new': ApiNewNew;
      'api::ownership.ownership': ApiOwnershipOwnership;
      'api::ranking.ranking': ApiRankingRanking;
      'api::review.review': ApiReviewReview;
      'api::specialization.specialization': ApiSpecializationSpecialization;
      'api::stream.stream': ApiStreamStream;
      'api::study-abroad.study-abroad': ApiStudyAbroadStudyAbroad;
      'api::study-india.study-india': ApiStudyIndiaStudyIndia;
      'api::university.university': ApiUniversityUniversity;
    }
  }
}
