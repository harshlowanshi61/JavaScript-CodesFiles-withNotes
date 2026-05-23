#include <stdio.h>
#include <string.h>
#include <ctype.h>

int isKeyword(char str[]) {
    char keywords[][10] = {
        "int", "float", "char", "if",
        "else", "while", "for", "return"
    };

    int n = 8;

    for(int i = 0; i < n; i++) {
        if(strcmp(str, keywords[i]) == 0)
            return 1;
    }
    return 0;
}

int isOperator(char ch) {
    return (ch == '+' || ch == '-' || ch == '*' ||
            ch == '/' || ch == '=');
}

int isSpecialSymbol(char ch) {
    return (ch == ';' || ch == ',' || ch == '(' ||
            ch == ')' || ch == '{' || ch == '}');
}

int main() {
    char str[200];
    int i = 0;

    printf("Enter C code:\n");
    fgets(str, sizeof(str), stdin);

    while(str[i] != '\0') {

        // Skip spaces
        if(isspace(str[i])) {
            i++;
            continue;
        }

        // Identifier or Keyword
        if(isalpha(str[i]) || str[i] == '_') {
            char buffer[50];
            int j = 0;

            while(isalnum(str[i]) || str[i] == '_') {
                buffer[j++] = str[i++];
            }

            buffer[j] = '\0';

            if(isKeyword(buffer))
                printf("Keyword: %s\n", buffer);
            else
                printf("Identifier: %s\n", buffer);
        }

        // Number
        else if(isdigit(str[i])) {
            char buffer[50];
            int j = 0;

            while(isdigit(str[i])) {
                buffer[j++] = str[i++];
            }

            buffer[j] = '\0';

            printf("Number: %s\n", buffer);
        }

        // Operator
        else if(isOperator(str[i])) {
            printf("Operator: %c\n", str[i]);
            i++;
        }

        else if(isSpecialSymbol(str[i])) {
            printf("Special Symbol: %c\n", str[i]);
            i++;
        }

        // Invalid Character
        else {
            printf("Invalid Character: %c\n", str[i]);
            i++;
        }
    }

    return 0;
}
