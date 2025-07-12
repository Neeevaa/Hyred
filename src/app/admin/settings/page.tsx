import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdminSettingsPage() {
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage platform-wide settings.</p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Add new sections or questions to the app.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Add New Section</h3>
                    <p className="text-sm text-muted-foreground">Create a new learning section like 'System Design'.</p>
                </div>
                <Button>Add Section</Button>
            </div>
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Add New Questions</h3>
                    <p className="text-sm text-muted-foreground">Add new questions to existing sections.</p>
                </div>
                <Button>Add Questions</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
