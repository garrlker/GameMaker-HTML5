var g_webGL = false;

var g_Matrix = null;

// Constants for matrix stack
var MATRIX_VIEW = 0,
	MATRIX_PROJECTION = 1,
    MATRIX_WORLD = 2,
    MATRIX_STACK_MAX = 16;

// Not webgl related but I need somewhere to put it
var g_isZeus = false;