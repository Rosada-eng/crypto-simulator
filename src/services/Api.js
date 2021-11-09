import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

//! PRICE
export function GET_CRYPTOS_PRICE_ONLY(idsArray) {
  /*
      /simple/price/<str:ids>?vs_currencies=<str:id>
          -- Pega o valor das criptomoedas informadas no valor da moeda informada (usd)
          opt: Tamanho de mercado / vol em 24 hr / variacao em 24 / last_updated
    */
  return api
    .get(`simple/price?ids=${idsArray.join('%2C')}&vs_currencies=usd`)
    .then((response) => response.data);
}

//! CRYPTO MARKET'S DATA
export function GET_CRYPTOS_MARKET_DATA(
  pageNumber,
  idsArray = null,
  hasSparkline = false,
  filterByCategoryId = null,
) {
  /*
    @ ordena por tamanho de mercado
    /coins/markets?vs_currency=<str:id>&ids=<id1, id2, id3, ... >
        -- Lista todas as moedas disponíveis na API, contendo: 
            - simbolo / nome / id / logo
            - preço (usd)
            - market cap
            - volume de transações
            - variações
        * opt:
            $ Filtrar por categoria
            * Ordenar (tamanho de cap | volume de transacao)
            * nº por página (1 - 250)
            * nº da página
            * sparkline: array de valores nos ultimos 7 dias
    */
  let endpoint =
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50';
  idsArray ? (endpoint += `&ids=${idsArray.join('%2C')}`) : (endpoint += '');
  filterByCategoryId
    ? (endpoint += `&category=${filterByCategoryId}`)
    : (endpoint += '');
  endpoint += `&page=${pageNumber}` + `sparkline=${hasSparkline}`;

  return api.get(endpoint).then((response) => response.data);
}
//! COIN INFO'S
export function GET_COIN_INFO(id) {
  /*
    /coins/<str:id>
        -- Retorna dados de apenas uma moeda, com mais detalhes que markets
    */
  return api.get(`coins/${id}`).then((response) => response.data);
}

//! CATEGORIES
export function GET_CATEGORIES(listOnly) {
  /*
    /coins/categories/list
        -- lista todas as categorias de criptomoedas existentes
        Retorna: {category_id, name}
    
    /coins/categories
        -- lista as categorias de criptomoedas existentes COM informações de mercado
           ordenado por Tamanho de Mercado
        - Tamanho mercado + Variação 24 hrs
        - Logo das Top 3 moedas
        - Volume transações em 24 hr
        Retorna: {id, name, market_cap, market_cap_change,24h, content, top_3_coins, volume_24h, updated_at}
        
        //>> Linkar com filtro por categoria
    */
  if (listOnly) {
    return api.get('coins/categories/list').then((response) => response.data);
  } else {
    return api.get('coins/categories').then((response) => response.data);
  }
}
