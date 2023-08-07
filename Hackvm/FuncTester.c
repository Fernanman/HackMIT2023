#include <stdio.h>
#include <string.h>

void XOR(char *param_1, int param_2, char param_3) {
    char *var1;

    if (0 < param_2) {
        var1 = param_1 + param_2;
	do {
	    *param_1 = *param_1 ^ param_3;
	    param_1 = param_1 + 1;
	} while (param_1 != var1);
    }
    return;
}

int main(int argc, char **argv) {
    char test_var = (char) 45;
    char test_var_1 = (char) 45;
    char test_var_2 = (char) 104;
    char test_var_3 = (char) 101;
    char test_var_4 = (char) 108;
    char test_var_5 = (char) 112;
    //char test_var_6 = (char) 101;

    printf("confirmed test: %c%c%c%c%c%c\n", test_var,
		    test_var_1, test_var_2, test_var_3,
		    test_var_4, test_var_5);

    //char option_var = (char) 201;
    //XOR(&option_var, 6, (char) 228);
    
    return 0;    
}
