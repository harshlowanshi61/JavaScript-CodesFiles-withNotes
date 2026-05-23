#include <ctype.h>
#include <stdio.h>
#include <string.h>

// Function declarations
void find_first(char, int, int);
void follow(char);
void grammarfollow(char, int, int);

// Global variables
int count, n = 0, m = 0;
char production[10][10];
char first[10], f[10];

int k;
char ck;
int e;

// Function to avoid duplicate FIRST entries
void addToFirst(char c)
{
    int i;

    for(i = 0; i < n; i++)
    {
        if(first[i] == c)
            return;
    }

    first[n++] = c;
}

// Function to avoid duplicate FOLLOW entries
void addToFollow(char c)
{
    int i;

    for(i = 0; i < m; i++)
    {
        if(f[i] == c)
            return;
    }

    f[m++] = c;
}

int main()
{
    int i, ff;
    char c;

    // Grammar
    count = 8;

    strcpy(production[0], "E=TR");
    strcpy(production[1], "R=+TR");
    strcpy(production[2], "R=#");
    strcpy(production[3], "T=FY");
    strcpy(production[4], "Y=*FY");
    strcpy(production[5], "Y=#");
    strcpy(production[6], "F=(E)");
    strcpy(production[7], "F=i");

    printf("\nGRAMMAR:\n");

    for(i = 0; i < count; i++)
    {
        printf("%s\n", production[i]);
    }

    printf("\n============================\n");

    // FIRST SETS
    printf("\nFIRST SETS:\n");

    char done[10];
    int ptr = -1;

    for(k = 0; k < count; k++)
    {
        c = production[k][0];

        int already = 0;

        for(ff = 0; ff <= ptr; ff++)
        {
            if(c == done[ff])
            {
                already = 1;
                break;
            }
        }

        if(already)
            continue;

        n = 0;

        find_first(c, 0, 0);

        ptr++;
        done[ptr] = c;

        printf("FIRST(%c) = { ", c);

        for(i = 0; i < n; i++)
        {
            printf("%c", first[i]);

            if(i != n - 1)
                printf(", ");
        }

        printf(" }\n");
    }

    printf("\n============================\n");

    // FOLLOW SETS
    printf("\nFOLLOW SETS:\n");

    char donee[10];
    ptr = -1;

    for(e = 0; e < count; e++)
    {
        ck = production[e][0];

        int already = 0;

        for(ff = 0; ff <= ptr; ff++)
        {
            if(ck == donee[ff])
            {
                already = 1;
                break;
            }
        }

        if(already)
            continue;

        m = 0;

        follow(ck);

        ptr++;
        donee[ptr] = ck;

        printf("FOLLOW(%c) = { ", ck);

        for(i = 0; i < m; i++)
        {
            printf("%c", f[i]);

            if(i != m - 1)
                printf(", ");
        }

        printf(" }\n");
    }

    return 0;
}

// Function to calculate FIRST
void find_first(char c, int q1, int q2)
{
    int j;

    // If terminal symbol
    if(!isupper(c))
    {
        addToFirst(c);
        return;
    }

    for(j = 0; j < count; j++)
    {
        if(production[j][0] == c)
        {
            // If epsilon production
            if(production[j][2] == '#')
            {
                addToFirst('#');
            }

            // If terminal found
            else if(!isupper(production[j][2]))
            {
                addToFirst(production[j][2]);
            }

            // If non-terminal found
            else
            {
                find_first(production[j][2], j, 3);
            }
        }
    }
}

// Function to calculate FOLLOW
void follow(char c)
{
    int i, j;

    // Start symbol
    if(production[0][0] == c)
    {
        addToFollow('$');
    }

    for(i = 0; i < count; i++)
    {
        for(j = 2; j < strlen(production[i]); j++)
        {
            if(production[i][j] == c)
            {
                // Symbol exists after current symbol
                if(production[i][j + 1] != '\0')
                {
                    grammarfollow(production[i][j + 1], i, j + 2);
                }

                // If symbol is at end
                if(production[i][j + 1] == '\0' &&
                   c != production[i][0])
                {
                    follow(production[i][0]);
                }
            }
        }
    }
}

// Function used in FOLLOW calculation
void grammarfollow(char c, int c1, int c2)
{
    int k;

    // If terminal
    if(!isupper(c))
    {
        addToFollow(c);
    }

    else
    {
        for(k = 0; k < count; k++)
        {
            if(production[k][0] == c)
            {
                if(production[k][2] == '#')
                {
                    if(production[c1][c2] == '\0')
                    {
                        follow(production[c1][0]);
                    }
                    else
                    {
                        grammarfollow(production[c1][c2], c1, c2 + 1);
                    }
                }

                else if(!isupper(production[k][2]))
                {
                    addToFollow(production[k][2]);
                }

                else
                {
                    grammarfollow(production[k][2], k, 3);
                }
            }
        }
    }
}
