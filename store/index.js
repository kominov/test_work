export const state = () => ({
    company: [],
  })

export const mutations = {
    addNewCompany(state,newCompany) {
        state.company.push(newCompany);
    },
    changeAddress(state,newAddress){
        console.log(newAddress,"new adr");
            const item = state.company.findIndex(item => item.id === newAddress.id);
            Object.assign(state.company[item], { address: newAddress.newAddress });
    },
    deleteCompany(state,id){
     state.company =  state.company.filter(t=>t.filter !== id)
    }
}