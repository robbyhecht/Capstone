import APIManager from "./APIManager"
import VenuesManager from "./VenuesManager"

class ToursManager extends APIManager {

  addAndList(newTour) {
    return this.post(newTour).then(() => this.allSortedAlpha(newTour.user_id))
  }

  getAll(user) {
    return this.allSortedAlpha(user)
  }

  removeAndList(id, user) {
    return this.delete(id).then(() => this.allSortedAlpha(user))
  }

  patchAndListTour(tour, url) {
    return this.patch(tour, url).then(() => this.allSortedAlpha())
  }




}

// EXPORTS TOURS MANAGER WITH 'THIS' REPRESENTING 'TOURS'
export default new ToursManager("tours")