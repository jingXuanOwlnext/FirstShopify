import book1 from '../components/Images/book1.jpg';
import book2 from '../components/Images/book2.jpg';
import book3 from '../components/Images/book3.jpg';
import book4 from '../components/Images/book4.jpg';
import book5 from '../components/Images/book5.jpg';

function createData(ImageLink,Title,Price){
    return{"ImageLink":ImageLink,"Title":Title,"Price":Price};
}

export var Bought = [] 

const data = [
    createData(book1,'TERRIBLE TIMELINES CARS',70.49),
    createData(book2,'The Amazing Animal Adventure',80.99),
    createData(book3,'Lets Make Some Great Art',69.99),
    createData(book4,'Midnight Monsters: A Pop-up Shadow Search',99.99),
    createData(book5,'To the Ends of the Earth and Back Again',56.49),
]; 

export default data