//kecepatan dan pada variabel
var speed = 2.2;
var on = false;

function setup() {
	createCanvas(500, 500);
}

//Variabel sumbu x dan hijau
var car = {
	x: 0,
	g: 250
};

//warna langit
var sky = {
	col1: 255,
	col2: 220,
	col3: 0,
	col4: 150
};

function draw() {
	//pemetaan untuk warna langit dan mobil
	//saat bergerak di sepanjang sumbu x
	sky.col1 = map(car.x, 0, 500, 255, 0);
	sky.col2 = map(car.x, 0, 500, 220, 0);
	sky.col3 = map(car.x, 0, 500, 0, 255);
	sky.col4 = map(car.x, 0, 500, 150, 80);
	car.g = map(car.x, 0, 500, 250, 0);

	//latar belakang langit berubah saat mobil melaju
	background(0, sky.col2, sky.col1);

	//matahari atau bulan
	fill(255, 255, sky.col3);
	ellipse(50, 50, 60, 60);

	//beton
	fill(sky.col4);
	rect(0, 250, 499, 250);

	//mobil
	fill(0, car.g, 0);
	rect(car.x, 198, 110, 50, 20);
	fill(50);
	ellipse(car.x, 250, 40, 40);
	ellipse(car.x + 110, 250, 40, 40);

	//Boolean untuk mobil yang berbalik	
	if (car.x + 110 >= width || car.x < 0) {
		speed = speed * -1;
	}

	//Kecepatan mobil
	car.x = car.x + speed;
}