import { normalize } from './main'

test('大阪府堺市北区新金岡町4丁1−8', async () => {
  const res = await normalize('大阪府堺市北区新金岡町4丁1−8')
  expect(res).toBe('大阪府堺市北区新金岡町4丁1-8')
})

test('大阪府堺市北区新金岡町４丁１ー８', async () => {
  const res = await normalize('大阪府堺市北区新金岡町４丁１ー８')
  expect(res).toBe('大阪府堺市北区新金岡町4丁1-8')
})

test('和歌山県串本町串本1234', async () => {
  const res = await normalize('和歌山県串本町串本1234')
  expect(res).toBe('和歌山県東牟婁郡串本町串本1234')
})

test('和歌山県東牟婁郡串本町串本1234', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本1234')
  expect(res).toBe('和歌山県東牟婁郡串本町串本1234')
})

test('和歌山県東牟婁郡串本町串本一二三四', async () => {
  const res = await normalize('和歌山県東牟婁郡串本町串本一二三四')
  expect(res).toBe('和歌山県東牟婁郡串本町串本1234')
})

test('京都府京都市中京区寺町通御池上る上本能寺前町488番地', async () => {
  const res = await normalize(
    '京都府京都市中京区寺町通御池上る上本能寺前町488番地',
  )
  expect(res).toBe('京都府京都市中京区上本能寺前町488')
})

test('大阪府大阪市中央区大手前２-１', async () => {
  const res = await normalize('大阪府大阪市中央区大手前２-１')
  expect(res).toBe('大阪府大阪市中央区大手前2丁目1')
})

test('北海道札幌市西区二十四軒二条2丁目3番3号', async () => {
  const res = await normalize('北海道札幌市西区24-2-2-3-3')
  expect(res).toBe('北海道札幌市西区24軒2条2丁目3-3')
})

test('京都府京都市東山区大和大路2-537-1', async () => {
  const res = await normalize('京都府京都市東山区大和大路2-537-1')
  expect(res).toBe('京都府京都市東山区大和大路2丁目537-1')
})

test('京都府京都市東山区大和大路2丁目五百三十七-1', async () => {
  const res = await normalize('京都府京都市東山区大和大路2丁目五百三十七の1')
  expect(res).toBe('京都府京都市東山区大和大路2丁目537-1')
})

test('愛知県蒲郡市旭町17番1号', async () => {
  const res = await normalize('愛知県蒲郡市旭町17番1号')
  expect(res).toBe('愛知県蒲郡市旭町17-1')
})

test('北海道岩見沢市栗沢町万字寿町１−２', async () => {
  const res = await normalize('北海道岩見沢市栗沢町万字寿町１−２')
  expect(res).toBe('北海道岩見沢市栗沢町万字寿町1-2')
})

test('北海道久遠郡せたな町北檜山区北檜山１９３', async () => {
  const res = await normalize('北海道久遠郡せたな町北檜山区北檜山１９３')
  expect(res).toBe('北海道久遠郡せたな町北檜山区北檜山193')
})

test('京都府京都市中京区錦小路通大宮東入七軒町466', async () => {
  const res = await normalize('京都府京都市中京区錦小路通大宮東入七軒町466')
  expect(res).toBe('京都府京都市中京区七軒町466')
})

test('栃木県佐野市七軒町2201', async () => {
  const res = await normalize('栃木県佐野市七軒町2201')
  expect(res).toBe('栃木県佐野市七軒町2201')
})