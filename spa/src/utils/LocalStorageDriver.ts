export class LocalStorageDriver<Item> {
  constructor(private key : string) {
  }

  getItem(): string | null {
    return localStorage.getItem(this.key)
  }

  getParsedItem(): Item | null {
    const item = this.getItem()

    if (item) return JSON.parse(item)
    return null
  }

  setItem(item: Item): void {
    localStorage.setItem(this.key, JSON.stringify(item))
  }
}