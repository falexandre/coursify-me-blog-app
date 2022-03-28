import React, { useState } from 'react';
import { Container, Title } from './styles';
import { Select } from 'native-base';

export function Filter() {
    const [service, setService] = useState('all');
    return (
        <Container>
            <Title>ORDENAR POR:</Title>
            <Select selectedValue={service} minWidth="105" height="46"
                    onValueChange={itemValue => setService(itemValue)}
            >
                <Select.Item label="Padrão" value="all" />
                <Select.Item label="A-Z" value="asc" />
                <Select.Item label="Z-A" value="desc" />
                <Select.Item label="Mais visualizados" value="countAsc" />
                <Select.Item label="Menos visualizados" value="countDesc" />
            </Select>
        </Container>
    )
}