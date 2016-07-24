function chainStore()
{
    var store1='Nike China';
    var store2=store1;
    store1='Nike U.S.A.';
    console.log(store2); //Nike China
}
chainStore();

function chainStore()
{
    var store1=['Nike China'];
    var store2=store1;
    console.log(store2[0]); //Nike China
    store1[0]='Nike U.S.A.';
    console.log(store2[0]); //Nike U.S.A.
}
chainStore();
