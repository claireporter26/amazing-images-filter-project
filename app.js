const buttons = document.querySelectorAll('.filter-btn');

const imageContainer = document.querySelectorAll('.img-container');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        e.preventDefault();

        const filter = e.target.dataset.filter;

        imageContainer.forEach(function(item){
            if (filter === 'all'){
                item.style.display = 'block';
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        })
        
    })
})