#include <stdio.h>
#include <string.h>
#include <unistd.h>
#define LENGTH 8
#define BUFLEN 128

int main() {
    char buffer[BUFLEN];
    char password[LENGTH];
    int password_length;

    // Passwword is finally
    password[0] = 'f';
    password[1] = 'i';
    password[2] = 'n';
    password[3] = 'a';
    password[4] = 'l';
    password[5] = 'l';
    password[6] = 'y';
    password[7] = '\0';
    
    int compare;
    password_length = strlen(password);

    fgets(buffer, 128, stdin);
    int len = strlen(buffer);
    if (buffer[len - 1] == '\n') {
        buffer[len - 1] = '\0';
    }
    len = strlen(buffer);

    // printf("%d, %d, %d, %d\n", LENGTH, (int) password_length, BUFLEN, len);
    // printf("%s\n", buffer);

    if ((len == password_length) && (compare = memcmp(buffer, password, password_length), compare == 0)) {
        printf("Correct password!\n");
    }
    else {
        printf("Wrong password\n");
    }


    
    return 0;
}