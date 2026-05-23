#include<stdio.h>
#include<string.h>
#include<ctype.h>

int main()
{
    char datatype[20], value[20];

    printf("Enter data type (int/float/char) : ");
    scanf("%s", datatype);

    printf("Enter value : ");
    scanf("%s", value);

    // Integer checking
    if(strcmp(datatype, "int") == 0)
    {
        int valid = 1;

        for(int i = 0; value[i] != '\0'; i++)
        {
            if(!isdigit(value[i]))
            {
                valid = 0;
                break;
            }
        }

        if(valid)
            printf("Valid Integer\n");
        else
            printf("Type Mismatch\n");
    }

    // Float checking
    else if(strcmp(datatype, "float") == 0)
    {
        int dot = 0, valid = 1;

        for(int i = 0; value[i] != '\0'; i++)
        {
            if(value[i] == '.')
                dot++;

            else if(!isdigit(value[i]))
            {
                valid = 0;
                break;
            }
        }

        if(valid && dot == 1)
            printf("Valid Float\n");
        else
            printf("Type Mismatch\n");
    }

    // Character checking
    else if(strcmp(datatype, "char") == 0)
    {
        if(strlen(value) == 1 && isalpha(value[0]))
            printf("Valid Character\n");
        else
            printf("Type Mismatch\n");
    }

    // Unknown datatype
    else
    {
        printf("Unknown Data Type\n");
    }

    return 0;
}
