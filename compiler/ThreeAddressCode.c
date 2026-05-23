#include <stdio.h>
#include <string.h>

#define MAX 20

char op[MAX], arg1[MAX], arg2[MAX], res[MAX];

int main()
{
    char exp[50];
    int i, j, k = 0;

    printf("Enter expression: ");
    scanf("%s", exp);

    // Step 1: Handle * and /
    for(i = 0; exp[i] != '\0'; i++)
    {
        if(exp[i] == '*' || exp[i] == '/')
        {
            op[k] = exp[i];
            arg1[k] = exp[i - 1];
            arg2[k] = exp[i + 1];
            res[k] = 't' + k;

            exp[i - 1] = res[k];

            for(j = i; exp[j] != '\0'; j++)
                exp[j] = exp[j + 2];

            k++;
            i = -1;
        }
    }

    // Step 2: Handle + and -
    for(i = 0; exp[i] != '\0'; i++)
    {
        if(exp[i] == '+' || exp[i] == '-')
        {
            op[k] = exp[i];
            arg1[k] = exp[i - 1];
            arg2[k] = exp[i + 1];
            res[k] = 't' + k;

            exp[i - 1] = res[k];

            for(j = i; exp[j] != '\0'; j++)
                exp[j] = exp[j + 2];

            k++;
            i = -1;
        }
    }

    // Print Three Address Code
    printf("\nThree Address Code:\n");

    for(i = 0; i < k; i++)
    {
        printf("%c = %c %c %c\n",
               res[i],
               arg1[i],
               op[i],
               arg2[i]);
    }

    // Print Quadruples
    printf("\nQuadruples:\n");
    printf("Op\tArg1\tArg2\tResult\n");

    for(i = 0; i < k; i++)
    {
        printf("%c\t%c\t%c\t%c\n",
               op[i],
               arg1[i],
               arg2[i],
               res[i]);
    }

    // Print Triples
    printf("\nTriples:\n");
    printf("Index\tOp\tArg1\tArg2\n");

    for(i = 0; i < k; i++)
    {
        printf("%d\t%c\t%c\t%c\n",
               i,
               op[i],
               arg1[i],
               arg2[i]);
    }

    return 0;
}