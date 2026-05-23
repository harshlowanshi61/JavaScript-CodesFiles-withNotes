#include <stdio.h>
#include <ctype.h>
#include <math.h>

#define MAX 100

int stack[MAX];
int top = -1;

// Push function
void push(int value)
{
    stack[++top] = value;
}

// Pop function
int pop()
{
    return stack[top--];
}

// Function to evaluate postfix expression
int evaluatePostfix(char exp[])
{
    int i = 0;
    char ch;

    while((ch = exp[i++]) != '\0')
    {
        // If operand, push to stack
        if(isdigit(ch))
        {
            push(ch - '0'); // Convert char to int
        }

        else
        {
            int val1 = pop();
            int val2 = pop();

            switch(ch)
            {
                case '+':
                    push(val2 + val1);
                    break;

                case '-':
                    push(val2 - val1);
                    break;

                case '*':
                    push(val2 * val1);
                    break;

                case '/':
                    push(val2 / val1);
                    break;

                case '^':
                    push(pow(val2, val1));
                    break;
            }
        }
    }

    return pop();
}

int main()
{
    char exp[MAX];

    printf("Enter postfix expression: ");
    scanf("%s", exp);

    int result = evaluatePostfix(exp);

    printf("Result = %d\n", result);

    return 0;
}