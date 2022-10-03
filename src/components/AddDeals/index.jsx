import React, { useContext } from 'react';
import { Context } from '../../context';
import s from './style.module.sass';
import Button from '../UI/Button';

export default function AddDeals() {

    const { add_deals_list, add_deal_card } = useContext(Context);

    const submit = event => {
        event.preventDefault();
        const { title, days } = event.target;
        add_deals_list(title.value, days.value);
        add_deal_card(title.value, days.value);
        title.value = ''; 
        days.value = '';
    }
    
    

    return (
        <form onSubmit={submit} className={ s.add_deals}>
            <input required type="text" name='title' placeholder='Название' />
            <select required defaultValue='' name="days">
                <option disabled hidden value="">День недели</option>
                <option value="1">Понедельник</option>
                <option value="2">Вторник</option>
                <option value="3">Среда</option>
                <option value="4">Четверг</option>
                <option value="5">Пятница</option>
                <option value="6">Cуббота</option>
                <option value="7">Воскресенье</option>
            </select>
            <Button>Добавить</Button>
        </form>
    )
}
