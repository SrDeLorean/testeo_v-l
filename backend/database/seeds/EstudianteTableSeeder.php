<?php

use App\Estudiante;
use Illuminate\Database\Seeder;

class EstudianteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Estudiante::create([
            'name' => 'Sebatian Ibarra'
        ]);
        Estudiante::create([
            'name' => 'Felipe Milla'
        ]);
        Estudiante::create([
            'name' => 'Matias pizarro'
        ]);
        Estudiante::create([
            'name' => 'Javiera Mendez'
        ]);
        Estudiante::create([
            'name' => 'Brayan Escobar'
        ]);
        Estudiante::create([
            'name' => 'Paolo'
        ]);
    }
}
