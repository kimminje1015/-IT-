const a = {}
a.b;

const c = null;
try{
    c.d;
} catch(e)
{
    console.error(e);
}
c?.d;

try{
    c.f;
} catch(e)
{
    console.error(e);
}
c?.f();
try{
    c[0];
} catch(e)
{
    console.error(e);
}
c?.[0];



