import { Category } from '../lib/definitions';
import styles from '../styles/ProductListing.module.css';

// Type can be filled or border
export default function FilterCategory( { categories }: { categories: Category[]}) {
    return (
        <div className={styles.filterSection}>
            <h4>Category</h4>
            <select>
                <option value="">All</option>
                {categories?.map((item) => (
                <option value={item.category}>{item.category}</option>
                ))}
                {/* <option value="category1">Category 1</option>
                <option value="category2">Category 2</option> */}
            </select>
        </div>
    );
}