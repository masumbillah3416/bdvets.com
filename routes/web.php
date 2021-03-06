<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get("/","UserController@index")->name('index');
Route::get("/village","LocationController@village")->name('village');

Route::post("/village-store","LocationController@villageStore")->name('village-store');

Route::get("/village-delete","LocationController@villageDelete")->name('village-delete');


Route::resource('offices', 'OfficeController');
Route::resource('doctors', 'DoctorController');
Route::resource('doctor-profiles', 'DoctorProfileController');

Route::resource('farmers', 'FarmerController');
Route::resource('medichines', 'MedichineController');
Route::resource('medichine-categories', 'MedichineCategoryController');


Route::resource('prescriptions', 'PrescriptionController');
Route::resource('advices', 'AdviceController');
Route::resource('clinical-signs', 'ClinicalSignController');
Route::resource('necropsies', 'NecropsyController');
Route::resource('diagnoses', 'DiagnosisController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');










//////////   Api Links

Route::get('divisions-list-api', 'LocationController@divisionListApi')->name('divisions_list_api');
Route::get('district-list-api', 'LocationController@districtListApi')->name('district_list_api');
Route::get('upazilla-list-api', 'LocationController@upazillatListApi')->name('upazilla_list_api');
Route::get('union-list-api', 'LocationController@unionListApi')->name('union_list_api');
Route::get('village-list-api', 'LocationController@villageListApi')->name('village_list_api');

Route::get('village-farmer-list_api', 'FarmerController@villageFarmerListApi')->name('village_farmer_list_api');
Route::get('medichine-category-list-api', 'MedichineCategoryController@medichineCategoryListApi')->name('medichine_category_list_api');
Route::get('office-list-api', 'OfficeController@officeListApi')->name('office_list_api');





Route::resource('test', 'TestController');
