#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Enum for food type
 typedef enum {BURGER, PIZZA, SANDWICH, DRINK, NOODLES, SOUP, NONE} FoodType;
// Struct for Food Items
typedef struct {
 int id;
 char name[50];
 FoodType type;
 float price;
} FoodItem;
// Struct for Order Items
 typedef struct {
  int id;
  FoodItem *item;
  int quantity;
 } OrderItem;
// Function to display food items
void displayFoodItems(FoodItem *items, int count) {
 for (int i = 0; i < count; i++) {
 printf("%d. %s - $%.2f\n", items[i].id, items[i].name, items[i].price);
 }
}
// Function to display order items
void displayOrderItems(OrderItem *items, int count) {
  for (int i = 0; i < count; i++) {
  printf("%d. %s - Quantity: %d - $%.2f\n", items[i].id, items[i].item->name, items[i].quantity, items[i].item->price * items[i].quantity);
 }
}
// Function to calculate total bill amount
float calculateTotalBill(OrderItem *items, int count) {
  float total = 0;
  for (int i = 0; i < count; i++) {
  total += items[i].item->price * items[i].quantity;
 }
  return total;
}
int main() {
 FoodItem items[] = {
 {1, "Chicken Burger", BURGER, 5.99},
 {2, "Veggie Burger", BURGER, 5.59},
 {3, "French Fries", DRINK, 3.59},
 {4, "Coca-Cola", DRINK, 2.49},
 {5, "Cheese Pizza", PIZZA, 10.99},
 {6, "Veggie Pizza", PIZZA, 9.99},
 {7, "Clam Pasta", NOODLES, 12.99},
 {8, "Chicken Noodles", NOODLES, 10.99},
 {9, "Spicy Soup", SOUP, 3.99},
 {10, "Tomato Soup", SOUP, 2.99},
 };
 OrderItem order[10];
 int orderCount = 0;
 // Display Food Items
 printf("Available Food Items:\n");
 displayFoodItems(items, sizeof(items) / sizeof(items[0]));
 // Get User Order
 int choice;
 int quantity;
 do {
 printf("\nEnter the food item id you want to order: ");
 scanf("%d", &choice);
 if (choice != 0) {
 for (int i = 0; i < sizeof(items) / sizeof(items[0]); i++) {
 if (items[i].id == choice) {
 printf("Enter the quantity of the food item '%s': ", items[i].name);
 scanf("%d", &quantity);
 order[orderCount].id = items[i].id;
 order[orderCount].item = &items[i];
 order[orderCount].quantity = quantity;
 orderCount++;
 break;
       }
     }
   }
 } 
    while (choice != 0);
 // Display Ordered Items
 printf("\nYour Order:\n");
 displayOrderItems(order, orderCount);
 // Calculate Total Bill
 float totalBill = calculateTotalBill(order, orderCount);
 printf("\nTotal Bill: $%.2f\n", totalBill);
 return 0;
}