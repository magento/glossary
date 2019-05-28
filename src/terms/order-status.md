---
  title: "order status"
  wordClasses:
    - "noun"
  tags:
    - "business"
    - "order"
  synonyms: []
  relatedTerms:
    - "order"
    - "invoice"
---
Indicates the relative position and state of a customer order in a workflow. Basic stages of the workflow include Order, Payment, Invoice, and Shipment.

The full breakdown of order statuses includes:

* Pending - For new orders that have not been processed. Typically, these orders need to be invoiced and shipped.
* On Hold - Order can't proceed to order processing in this state. This is used when, for example, some data must be verified.
* Pending PayPal - For new orders placed through PayPal that are not yet cleared. When paying with PayPal, customers are redirected to the PayPal website. If customers haven't paid, order status is "Pending PayPal". These orders shouldn't be processed without checking PayPal to confirm that payment is made.
* Payment Review - When an external payment gateway is verifying the payment information from a sales order, the order is assigned the Payment Review status in the payment system and in Magento.
* Processing - Means the order has been invoiced or shipped, but not both.
* Suspected Fraud (possible for PayPal orders only) – The order transaction did not pass one or more of the PayPal fraud filters, and the system receives a response from PayPal that Fraud Services is reviewing the transaction.
* Complete - Orders marked as complete have been fully invoiced and shipped.
* Canceled - When the customer calls your web store and asks to cancel an order, if payment has not been made for the order.
