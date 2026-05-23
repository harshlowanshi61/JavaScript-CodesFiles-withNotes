#include <stdio.h>
#include <string.h>

char stack[50];
char input[50];

int top = -1;

void push(char ch)
{
    stack[++top] = ch;
    stack[top + 1] = '\0';
}

void reduce()
{
    // id -> E
    if(top >= 1 &&
       stack[top - 1] == 'i' &&
       stack[top] == 'd')
    {
        top--;
        stack[top] = 'E';
        stack[top + 1] = '\0';
    }

    // E+E -> E
    if(top >= 2 &&
       stack[top - 2] == 'E' &&
       stack[top - 1] == '+' &&
       stack[top] == 'E')
    {
        top = top - 2;
        stack[top] = 'E';
        stack[top + 1] = '\0';
    }

    // E*E -> E
    if(top >= 2 &&
       stack[top - 2] == 'E' &&
       stack[top - 1] == '*' &&
       stack[top] == 'E')
    {
        top = top - 2;
        stack[top] = 'E';
        stack[top + 1] = '\0';
    }
}

int main()
{
    int i;

    printf("Enter input string: ");
    scanf("%s", input);

    for(i = 0; i < strlen(input); i++)
    {
        push(input[i]);

        printf("Stack: %s\tInput: %s\n",
               stack,
               input + i + 1);

        reduce();
    }

    while(top > 0)
        reduce();

    if(stack[0] == 'E' && top == 0)
        printf("String Accepted\n");
    else
        printf("String Rejected\n");

    return 0;
}
