const degToRad = (degree) => {
	return degree * (Math.PI * 2 / 360);
};

const $canvas = document.querySelector('.js-canvas');
const ctx = $canvas.getContext('2d');
let stageWidth = $canvas.parentElement.scrollWidth;
let stageHeight = window.innerHeight / 4;
$canvas.width = stageWidth;
$canvas.height = stageHeight;
const myCurve = [];
const myCurveLength = 4;

class MyCurve {
	constructor({initPhase, cycle, amplitude, timeSpeed, color}) {
		this.initPhase = initPhase;
		this.cycle = cycle;
		this.amplitude = amplitude;
		this.timeSpeed = timeSpeed;
		this.color = color;
		this.time = 0;
	}

	draw() {
		ctx.beginPath();
		ctx.moveTo(0, stageHeight / 2);

		for (let i=0; i < stageWidth; i++) {
			const r = this.initPhase + degToRad(i) * this.cycle + this.time;
			ctx.lineTo(i, stageHeight / 2 + Math.sin(r) * this.amplitude);
		}

		ctx.stroke();
		ctx.strokeStyle = 'hsl(' + this.color.h + ', ' + this.color.s + '%,' + this.color.l + '%)';

		this.time += this.timeSpeed;
	}
}

// window.addEventListener('load', () => {

	for (let i=0; i < myCurveLength; i++) {
		myCurve[i] = new MyCurve({
			initPhase: 0,
			cycle: 0.05 +  Math.random() * 0.08,
			amplitude: 10.0 + Math.random() * 80.0,
			timeSpeed: 0.005 +  Math.random() * 0.01,
			color: {
				h: i * 18 % 360,
				s: 0,
				l: 50
			}
		});
	}

	const onAnimate = () => {
		ctx.fillStyle = 'rgb(248, 248, 255)';
		ctx.fillRect(0, 0, stageWidth, stageHeight);
		
		for (let i=0; i < myCurveLength; i++) {
			myCurve[i].draw();
		}

		requestAnimationFrame(onAnimate);
	};


	onAnimate();


	const onResize = () => {
		stageWidth = $canvas.parentElement.scrollWidth;
		stageHeight = window.innerHeight / 2;
		$canvas.width = stageWidth;
		$canvas.height = stageHeight;
		
		// チラつき防止
		ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
		ctx.fillRect(0, 0, stageWidth, stageHeight);
	};

	window.addEventListener('resize', () => {
		onResize();
	});
	
// });