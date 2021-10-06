# onfido-php
The Onfido API is used to submit check requests.

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.0.0
- Package version: 5.2.0
- Build package: org.openapitools.codegen.languages.PhpClientCodegen

## Requirements

PHP 7.1 and later

## Installation & Usage
### Composer

To install the bindings via [Composer](http://getcomposer.org/), add the following to `composer.json`:

```
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/onfido/api-php-client.git"
    }
  ],
  "require": {
    "onfido/api-php-client": "^5.2.0"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
    require_once('/path/to/onfido-php/vendor/autoload.php');
```

## Tests

To run the unit tests:

```
composer install
./vendor/bin/phpunit
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure API key authorization: Token
$config = Onfido\Configuration::getDefaultConfiguration();
$config->setApiKey('Authorization', 'token=' . 'YOUR API KEY');
$config->setApiKeyPrefix('Authorization', 'Token');

// Limit the at-rest region, if needed (optional, see https://documentation.onfido.com/#regions)
// $config->setHost($config->getHostFromSettings(1, array("region" => "us")));

$apiInstance = new Onfido\Api\DefaultApi(null, $config);

// Setting applicant details

$applicantDetails = new Onfido\Model\Applicant();

$applicantDetails->setFirstName('Jane');
$applicantDetails->setLastName('Doe');
$applicantDetails->setDob('1990-01-31');

$address = new \Onfido\Model\Address();
$address->setBuildingNumber('100');
$address->setStreet('Main Street');
$address->setTown('London');
$address->setPostcode('SW4 6EH');
$address->setCountry('GBR');

$applicantDetails->setAddress($address);

// Setting check details

$checkData = new Onfido\Model\Check();
$checkData->setReportNames(array('identity_standard'));

// Create an applicant and then a check with an Identity report

try {
    $applicantResult = $apiInstance->createApplicant($applicantDetails);
    $applicantId = $applicantResult->getId();
    print_r("Applicant ID: ".$applicantId);
    $checkData->setApplicantId($applicantId);
    $checkResult = $apiInstance->createCheck($checkData);
    print_r($checkResult);
} catch (Exception $e) {
    print_r($e->getResponseBody());
}

?>

```

## Documentation for API Endpoints

All URIs are relative to *https://api.onfido.com/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**cancelReport**](docs/Api/DefaultApi.md#cancelreport) | **POST** /reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
*DefaultApi* | [**createApplicant**](docs/Api/DefaultApi.md#createapplicant) | **POST** /applicants | Create Applicant
*DefaultApi* | [**createCheck**](docs/Api/DefaultApi.md#createcheck) | **POST** /checks | Create a check
*DefaultApi* | [**createWebhook**](docs/Api/DefaultApi.md#createwebhook) | **POST** /webhooks | Create a webhook
*DefaultApi* | [**deleteWebhook**](docs/Api/DefaultApi.md#deletewebhook) | **DELETE** /webhooks/{webhook_id} | Delete a webhook
*DefaultApi* | [**destroyApplicant**](docs/Api/DefaultApi.md#destroyapplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant
*DefaultApi* | [**downloadDocument**](docs/Api/DefaultApi.md#downloaddocument) | **GET** /documents/{document_id}/download | Download a documents raw data
*DefaultApi* | [**downloadLivePhoto**](docs/Api/DefaultApi.md#downloadlivephoto) | **GET** /live_photos/{live_photo_id}/download | Download live photo
*DefaultApi* | [**downloadLiveVideo**](docs/Api/DefaultApi.md#downloadlivevideo) | **GET** /live_videos/{live_video_id}/download | Download live video
*DefaultApi* | [**downloadLiveVideoFrame**](docs/Api/DefaultApi.md#downloadlivevideoframe) | **GET** /live_videos/{live_video_id}/frame | Download live video frame
*DefaultApi* | [**editWebhook**](docs/Api/DefaultApi.md#editwebhook) | **PUT** /webhooks/{webhook_id} | Edit a webhook
*DefaultApi* | [**findAddresses**](docs/Api/DefaultApi.md#findaddresses) | **GET** /addresses/pick | Search for addresses by postcode
*DefaultApi* | [**findApplicant**](docs/Api/DefaultApi.md#findapplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant
*DefaultApi* | [**findCheck**](docs/Api/DefaultApi.md#findcheck) | **GET** /checks/{check_id} | Retrieve a Check
*DefaultApi* | [**findDocument**](docs/Api/DefaultApi.md#finddocument) | **GET** /documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
*DefaultApi* | [**findLivePhoto**](docs/Api/DefaultApi.md#findlivephoto) | **GET** /live_photos/{live_photo_id} | Retrieve live photo
*DefaultApi* | [**findLiveVideo**](docs/Api/DefaultApi.md#findlivevideo) | **GET** /live_videos/{live_video_id} | Retrieve live video
*DefaultApi* | [**findReport**](docs/Api/DefaultApi.md#findreport) | **GET** /reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
*DefaultApi* | [**findWebhook**](docs/Api/DefaultApi.md#findwebhook) | **GET** /webhooks/{webhook_id} | Retrieve a Webhook
*DefaultApi* | [**generateSdkToken**](docs/Api/DefaultApi.md#generatesdktoken) | **POST** /sdk_token | Generate a SDK token
*DefaultApi* | [**listApplicants**](docs/Api/DefaultApi.md#listapplicants) | **GET** /applicants | List Applicants
*DefaultApi* | [**listChecks**](docs/Api/DefaultApi.md#listchecks) | **GET** /checks | Retrieve Checks
*DefaultApi* | [**listDocuments**](docs/Api/DefaultApi.md#listdocuments) | **GET** /documents | List documents
*DefaultApi* | [**listLivePhotos**](docs/Api/DefaultApi.md#listlivephotos) | **GET** /live_photos | List live photos
*DefaultApi* | [**listLiveVideos**](docs/Api/DefaultApi.md#listlivevideos) | **GET** /live_videos | List live videos
*DefaultApi* | [**listReports**](docs/Api/DefaultApi.md#listreports) | **GET** /reports | All the reports belonging to a particular check can be listed from this endpoint.
*DefaultApi* | [**listWebhooks**](docs/Api/DefaultApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*DefaultApi* | [**restoreApplicant**](docs/Api/DefaultApi.md#restoreapplicant) | **POST** /applicants/{applicant_id}/restore | Restore Applicant
*DefaultApi* | [**resumeCheck**](docs/Api/DefaultApi.md#resumecheck) | **POST** /checks/{check_id}/resume | Resume a Check
*DefaultApi* | [**resumeReport**](docs/Api/DefaultApi.md#resumereport) | **POST** /reports/{report_id}/resume | This endpoint is for resuming individual paused reports.
*DefaultApi* | [**updateApplicant**](docs/Api/DefaultApi.md#updateapplicant) | **PUT** /applicants/{applicant_id} | Update Applicant
*DefaultApi* | [**uploadDocument**](docs/Api/DefaultApi.md#uploaddocument) | **POST** /documents | Upload a document
*DefaultApi* | [**uploadLivePhoto**](docs/Api/DefaultApi.md#uploadlivephoto) | **POST** /live_photos | Upload live photo


## Documentation For Models

 - [Address](docs/Model/Address.md)
 - [AddressesList](docs/Model/AddressesList.md)
 - [Applicant](docs/Model/Applicant.md)
 - [ApplicantsList](docs/Model/ApplicantsList.md)
 - [Check](docs/Model/Check.md)
 - [ChecksList](docs/Model/ChecksList.md)
 - [Document](docs/Model/Document.md)
 - [DocumentsList](docs/Model/DocumentsList.md)
 - [Error](docs/Model/Error.md)
 - [ErrorProperties](docs/Model/ErrorProperties.md)
 - [IdNumber](docs/Model/IdNumber.md)
 - [LivePhoto](docs/Model/LivePhoto.md)
 - [LivePhotosList](docs/Model/LivePhotosList.md)
 - [LiveVideo](docs/Model/LiveVideo.md)
 - [LiveVideosList](docs/Model/LiveVideosList.md)
 - [Report](docs/Model/Report.md)
 - [ReportDocument](docs/Model/ReportDocument.md)
 - [ReportsList](docs/Model/ReportsList.md)
 - [SdkToken](docs/Model/SdkToken.md)
 - [Webhook](docs/Model/Webhook.md)
 - [WebhooksList](docs/Model/WebhooksList.md)


## Documentation For Authorization


## Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author


