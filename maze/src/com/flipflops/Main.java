package com.flipflops;

public class Main {

    public static void main(String[] args) {
        System.out.println("Maze algorithm solver");

        Algorithm solve = new Algorithm();
        Mazes maze = new Mazes();
        solve.solve(maze.getMaze());
    }
}
