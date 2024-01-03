--- 
title: Verification results All possible states and reasons
custom_edit_url: null
sidebar_position: 4
---

# Verification results: All possible states and reasons

# Email Verification Results
When verifying a list of emails, the process returns results indicating the overall quality and deliverability of each email address. The verification process categorizes emails into five states:

## Deliverable
A high-confidence determination that the email address is associated with a valid account.

- Possible reasons for Deliverable emails:
  - Accepted Email: The email address exists and is deliverable.

## Undeliverable
A high-confidence determination that the email address is not associated with a valid account.

- Possible reasons for Undeliverable emails:
  - Invalid Email: The email address does not pass syntax validations.
  - Invalid Domain: The email address domain does not exist, is not valid, or should not be mailed to.
  - Rejected Email: The email address was rejected by the mail server because it does not exist.
  - Invalid SMTP: The mail server returned an unexpected or invalid response.

## Risky
Emails seem deliverable but should be used with caution due to low quality or deliverability.

- Possible reasons for Risky emails:
  - Low Quality: The email address has quality issues that may make it a risky or low-value address.
  - Low Deliverability: The email address appears to be deliverable, but deliverability cannot be guaranteed.

## Unknown
The domain associated with the email address is not responding, making it impossible to determine the validity of the email account.

- Possible reasons for Unknown emails:
  - No Connect: Could not connect to the mail server.
  - Timeout: Mail server session or DNS query timed out.
  - Unavailable SMTP: The mail server was unavailable to process our request at this time.
  - Unexpected Error: An unexpected error occurred.

*Note: Some Unknown emails may result from greylisting. These will be retried automatically, usually within a few minutes, and the results will be updated when possible.*

## Duplicate
The list contains more than one instance of the same email.