package com.flipflops;

public class Algorithm {

    private int solution[][] = {{0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0},
            {0, 0, 0, 0}};

    /**
     * Solve the @param maze passed
     * print the solution if exists
     */
    public void solve(int maze[][]) {

        if (!solveMazeUtil(maze, 0, 0, solution)) {
            System.out.print("This maze got no solution!");
            return;
        }
        printSolution(solution);
    }

    /**
     * Print the solution of maze
     *
     * @param sol array with the solution
     */
    private void printSolution(int sol[][]) {
        for (int i = 0; i < Constantes.MAZE_SIZE; i++) {
            for (int j = 0; j < Constantes.MAZE_SIZE; j++)
                System.out.print(" " + sol[i][j] + " ");
            System.out.println();
        }
    }

    /**
     * Check if is a valid maze for Maze_SIZE * Maze_SIZE
     *
     * @param maze array for test of valid condition
     * @param x    columns
     * @param y    rows
     * @return true if its a valid solution
     */
    private boolean isSafe(int maze[][], int x, int y) {
        // if (x, y outside maze) return false
        return (x >= 0 && x < Constantes.MAZE_SIZE && y >= 0 && y < Constantes.MAZE_SIZE && maze[x][y] == 1);
    }

    /**
     * Solve the maze
     *
     * @param maze the maze unsolved
     * @param x horizontal direction
     * @param y vertical direction
     * @param sol solution of the maze
     */
    private boolean solveMazeUtil(int maze[][], int x, int y,
                                  int sol[][]) {
        // if (x, y is goal) return true
        if (x == Constantes.MAZE_SIZE - 1 && y == Constantes.MAZE_SIZE - 1) {
            sol[x][y] = 1;
            return true;
        }

        // Check if maze[x][y] is valid
        if (isSafe(maze, x, y) == true) {
            // mark x, y as part of solution path
            sol[x][y] = 1;

            /* Move forward in x direction */
            if (solveMazeUtil(maze, x + 1, y, sol))
                return true;

			/* If moving in x direction doesn't give
			solution then Move down in y direction */
            if (solveMazeUtil(maze, x, y + 1, sol))
                return true;

			/* If none of the above movements works then
			BACKTRACK: unmark x, y as part of solution
			path */
            sol[x][y] = 0;
            return false;
        }
        return false;
    }
}
