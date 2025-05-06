    const canvas = document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#ff0000'
    ctx.lineWidth = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    let lastX = 0;
    let lastY = 0;
    let color = 0;
    let isDrawing = false;
    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true
        lastX = e.offsetX;
        lastY = e.offsetY;
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    const inputs = document.querySelectorAll('.tools-container input');
    inputs.forEach(input => input.addEventListener('change', update));
    inputs.forEach(input => input.addEventListener('mousemove', update));
    function update(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'base') {
                ctx.strokeStyle = value;
        }

        if (name === 'color') {
            ctx.lineWidth = parseInt(value);
        }
    }
function clearCanvas() {
    ctx.strokeStyle = '#fff';
}